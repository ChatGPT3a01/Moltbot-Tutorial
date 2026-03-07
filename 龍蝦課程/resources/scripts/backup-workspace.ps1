# backup-workspace.ps1 — 工作區備份腳本（CH10/CH21）
# 把 OpenClaw 工作區的重要設定檔備份到指定資料夾
#
# 使用方式：
#   pwsh backup-workspace.ps1
#   pwsh backup-workspace.ps1 -Destination "D:\備份"
#
# 備份內容：IDENTITY.md, SOUL.md, USER.md, AGENTS.md, TOOLS.md, HEARTBEAT.md, skills/

param(
    [string]$Destination = "$HOME\Desktop\openclaw-backup-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
)

$workspace = "$HOME\.openclaw\workspace"

if (-not (Test-Path $workspace)) {
    Write-Host "❌ 找不到工作區：$workspace" -ForegroundColor Red
    exit 1
}

# 建立備份資料夾
New-Item -ItemType Directory -Path $Destination -Force | Out-Null

# 備份檔案清單
$files = @(
    "IDENTITY.md",
    "SOUL.md",
    "USER.md",
    "AGENTS.md",
    "TOOLS.md",
    "HEARTBEAT.md",
    "NODE.md"
)

$count = 0
foreach ($file in $files) {
    $source = Join-Path $workspace $file
    if (Test-Path $source) {
        Copy-Item $source -Destination $Destination
        Write-Host "  ✅ $file" -ForegroundColor Green
        $count++
    }
}

# 備份 skills 資料夾
$skillsPath = Join-Path $workspace "skills"
if (Test-Path $skillsPath) {
    Copy-Item $skillsPath -Destination $Destination -Recurse
    Write-Host "  ✅ skills/ 資料夾" -ForegroundColor Green
    $count++
}

Write-Host ""
Write-Host "🦞 備份完成！共 $count 個項目" -ForegroundColor Cyan
Write-Host "   備份位置：$Destination" -ForegroundColor Yellow
