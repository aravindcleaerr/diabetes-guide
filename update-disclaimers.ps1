$files = Get-ChildItem -Path "d:\Project-AI\TNE\Sugar\Output" -Filter "*.html" | Where-Object { $_.Name -ne "terms-of-use.html" -and $_.Name -ne "alternative-therapies.html" }

$old1 = '<div class="disclaimer">This content is for educational purposes only and does not replace professional medical advice. Always consult a qualified endocrinologist / diabetologist before making any changes to your diabetes management plan.</div>'
$new1 = '<div class="disclaimer">This content is for educational purposes only and does not replace professional medical advice. The creators of SugarWise are not medical professionals. Do not start, stop, or change any medication without consulting your doctor. In case of emergency, call 112 (India) or your local emergency number. <a href="terms-of-use.html">Read full Terms of Use &amp; Medical Disclaimer</a></div>'

$old2 = '<div class="footer">SugarWise &bull; Comprehensive Diabetes Management Companion &bull; Last updated: January 2026</div>'
$new2 = '<div class="footer">SugarWise &bull; Comprehensive Diabetes Management Companion &bull; <a href="terms-of-use.html">Terms of Use</a> &bull; Last updated: January 2026</div>'

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $updated = $content.Replace($old1, $new1).Replace($old2, $new2)
    Set-Content -Path $file.FullName -Value $updated -NoNewline
    Write-Output "Updated: $($file.Name)"
}
