$base = $env:FREELLMAPI_BASE_URL
$apiKey = $env:FREELLMAPI_API_KEY
$url = "${base}/v1/models"
Write-Host "Requesting $url"
$response = curl.exe -s -H "Authorization: Bearer $apiKey" $url
Write-Output $response