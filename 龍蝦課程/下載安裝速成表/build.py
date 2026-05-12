#!/usr/bin/env python3
"""
build.py - 讀取龍蝦AI安裝大表.md，按 H1 拆分成 units，輸出 data/units.js
用法: py -3 build.py
"""
import json, os, re

MD_FILE = os.path.join(os.path.dirname(__file__) or '.', '龍蝦AI安裝大表.md')
OUT_FILE = os.path.join(os.path.dirname(__file__) or '.', 'data', 'units.js')

# 側邊欄顯示順序與 SVG 圖示
NAV_ORDER = [
    {'id': 'prep',    'match': '先準備',         'short': '先準備',    'icon': 'doc'},
    {'id': 'windows', 'match': 'Windows',        'short': 'Windows',  'icon': 'windows'},
    {'id': 'macos',   'match': 'macOS',          'short': 'macOS',    'icon': 'apple'},
    {'id': 'ubuntu',  'match': 'Ubuntu',         'short': 'Ubuntu',   'icon': 'ubuntu'},
    {'id': 'repair',  'match': '龍蝦安裝修復工具','short': '修復工具', 'icon': 'wrench'},
    {'id': 'nemoclaw','match': 'NemoClaw',       'short': 'NemoClaw', 'icon': 'nemo'},
    {'id': 'skill',      'match': 'SKILL',          'short': 'SKILL',       'icon': 'puzzle'},
    {'id': 'skill-demo', 'match': 'SKILL 安裝教學示範', 'short': 'SKILL 示範',  'icon': 'palette'},
    {'id': 'claudecode', 'match': 'Claude Code 安裝', 'short': 'Claude Code', 'icon': 'claude'},
]

def read_md():
    with open(MD_FILE, 'r', encoding='utf-8') as f:
        return f.read()

def split_sections(text):
    """按 H1 (# ) 拆分，回傳 [(title, content), ...]"""
    # 找所有 H1 位置
    pattern = re.compile(r'^# (.+)$', re.MULTILINE)
    matches = list(pattern.finditer(text))
    sections = []
    for i, m in enumerate(matches):
        title = m.group(1).strip()
        start = m.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        content = text[start:end].strip()
        # 移掉尾部的 --- 分隔線
        content = re.sub(r'\n---\s*$', '', content).strip()
        sections.append((title, content))
    return sections

def strip_layout_html(content):
    """移除 MD 中嵌入的 layout HTML（sidebar、doc-layout 等）"""
    # 移除 <div class="doc-layout"> ... </div> 區塊（含 sidebar）
    content = re.sub(
        r'<div class="doc-layout">.*?<div class="doc-main">\s*</div>\s*',
        '', content, flags=re.DOTALL
    )
    # 移除尾部殘留的獨立 </div> 閉合標籤
    content = re.sub(r'\n\s*</div>\s*\n\s*</div>\s*$', '', content)
    content = re.sub(r'\n\s*</div>\s*$', '', content)
    return content.strip()

def match_section(title, nav_item):
    """檢查 section title 是否匹配 nav item"""
    return nav_item['match'].lower() in title.lower()

def main():
    text = read_md()
    raw_sections = split_sections(text)

    # 第一個 H1 是總標題，跳過
    content_sections = raw_sections[1:]

    # 建立 title -> (title, content) 的 dict
    section_map = {}
    for title, content in content_sections:
        section_map[title] = content

    units = []
    for nav in NAV_ORDER:
        found = False
        for title, content in content_sections:
            if match_section(title, nav):
                # 移除 layout HTML
                clean = strip_layout_html(content)
                units.append({
                    'id': nav['id'],
                    'title': title,
                    'shortTitle': nav['short'],
                    'icon': nav['icon'],
                    'content': clean,
                })
                found = True
                break
        if not found:
            print(f"  WARN: nav item '{nav['short']}' not found in MD")

    # 提取封面與作者資訊（第一個 H1 的內容）
    intro_title, intro_content = raw_sections[0]
    intro_clean = strip_layout_html(intro_content)

    # 輸出
    os.makedirs(os.path.dirname(OUT_FILE), exist_ok=True)
    data = {
        'intro': {
            'title': intro_title,
            'content': intro_clean,
        },
        'units': units,
    }
    with open(OUT_FILE, 'w', encoding='utf-8') as f:
        f.write('const SITE_DATA = ')
        f.write(json.dumps(data, ensure_ascii=False, indent=2))
        f.write(';\n')

    print(f'OK: {len(units)} units -> {OUT_FILE}')
    for u in units:
        lines = u['content'].count('\n') + 1
        print(f"  [{u['id']}] {u['shortTitle']} ({lines} lines)")

if __name__ == '__main__':
    main()
