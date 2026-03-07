# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Moltbot** (龍蝦佈署教學) is a tutorial and tooling repository for deploying **OpenClaw** (formerly Clawdbot/Moltbot) - an AI chatbot that integrates with LINE Messaging API. The project targets Windows 11 users (mainly educators and beginners) and provides:

- Complete installation guides (繁體中文)
- An automated installer script (`龍蝦自動安裝程式/install-lobster.ps1` v3.2)
- A Skills pack for extending OpenClaw functionality
- GitHub Codespaces deployment option (free tier)
- Teaching presentation slides

## Architecture

### Core Components

- **OpenClaw** (`openclaw` npm package): The AI chatbot framework, installed globally via npm. Runs a gateway service on port `18789`.
- **LINE Messaging API**: Primary chat interface. Requires Channel ID, Channel Secret, and Channel Access Token.
- **ngrok**: Tunneling tool to expose local port 18789 to LINE's webhook.
- **LLM Backends**: Supports Anthropic (Claude), OpenAI (GPT/Codex OAuth), Google (Gemini), Ollama (local).

### Repository Structure

```
D:\Moltbot\
├── 龍蝦自動安裝程式/           # Automated installer package
│   ├── install-lobster.ps1     # Main installer script (v3.2, PowerShell)
│   ├── go.bat                  # Launcher with password protection
│   ├── build-exe.ps1           # Build standalone .exe installer
│   ├── build-tools/            # Build utilities
│   └── SKILL/lobster-skills-pack/  # Skills & workspace bundle
│       ├── skills/             # Custom skill definitions (SKILL.md per skill)
│       ├── skills-sop/         # Course outlines
│       └── workspace/          # Workspace config files
│           ├── IDENTITY.md     # Bot personality
│           ├── SOUL.md         # Bot behavior guidelines
│           ├── TOOLS.md        # Environment-specific config
│           ├── AGENTS.md       # Agent definitions
│           ├── HEARTBEAT.md    # Heartbeat schedule config
│           ├── USER.md         # User preferences
│           ├── dashboard/      # Dashboard web UI & scripts
│           └── *.js / *.ps1    # Utility scripts (TTS, calendar, Notion, etc.)
├── GitHub佈署/                 # GitHub Codespaces deployment package
│   ├── package.json            # openclaw dependency
│   ├── .devcontainer/          # Codespaces environment config
│   ├── openclaw-config-qwen.json  # Qwen (free tier) config
│   └── docs/                   # Deployment guides
├── lobster-workspace-generator/ # Web tool for generating workspace configs
├── 龍蝦佈署教學.md              # Main comprehensive tutorial
├── README.md                   # Project README (GitHub-formatted)
└── 簡報/                       # HTML presentation slides (Part1-11)
```

### OpenClaw Configuration

- Config file location: `~/.openclaw/openclaw.json` (new) or `~/.clawdbot/clawdbot.json` (legacy)
- Workspace directory: `~/.openclaw/workspace/`
- Gateway port: `18789`
- LINE webhook path: `/line/webhook`

### Key Commands

```powershell
# OpenClaw gateway management
openclaw gateway start|stop|restart|status
openclaw doctor                          # Diagnostic check
openclaw onboard --install-daemon        # Initial setup wizard
openclaw pairing approve line <code>     # Approve LINE pairing

# Legacy commands (clawdbot)
clawdbot gateway start|stop|restart|status

# ngrok tunnel
ngrok http 18789

# Installer
.\龍蝦自動安裝程式\go.bat              # Launch automated installer
```

## Language & Style

- All user-facing documentation is in **繁體中文** (Traditional Chinese)
- The project uses emoji extensively in documentation
- Target audience is beginners with zero technical background
- Author: 曾慶良（阿亮老師）, AI educator

## Important Notes

- The `龍蝦敏感資料備份-請安全保管.txt` file contains sensitive credentials - never commit or expose
- The installer (`install-lobster.ps1`) is password-protected via `go.bat`
- Node.js 22+ required (24+ recommended for latest OpenClaw)
- The project has undergone naming changes: Clawdbot -> Moltbot -> OpenClaw
- Skills use a `SKILL.md` manifest format defining tool name, description, and capabilities
