# keep-alive.ps1 — GitHub Codespaces 防休眠腳本（CH5/CH19）
# Codespaces 超過 30 分鐘沒活動會休眠，此腳本每 25 分鐘送一次心跳
#
# 使用方式：
#   在 Codespaces 的終端機裡執行：
#   pwsh keep-alive.ps1
#
# 按 Ctrl+C 停止

Write-Host "🦞 龍蝦防休眠腳本已啟動" -ForegroundColor Green
Write-Host "每 25 分鐘送一次心跳，按 Ctrl+C 停止" -ForegroundColor Yellow

while ($true) {
    $now = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    Write-Host "[$now] 💓 心跳" -ForegroundColor Cyan
    Start-Sleep -Seconds 1500  # 25 分鐘
}
