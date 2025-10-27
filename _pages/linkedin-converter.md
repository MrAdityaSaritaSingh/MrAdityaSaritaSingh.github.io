---
layout: splash
title: "Markdown to LinkedIn Post Converter"
permalink: /MarkdownPost/
---
<div class="container">
    <div>
        <label for="markdown-input"><strong>Markdown Input</strong></label>
        <textarea id="markdown-input" placeholder="Paste your Markdown here..."></textarea>
    </div>

    <div>
        <label for="linkedin-output"><strong>LinkedIn Output</strong></label>
        <textarea id="linkedin-output" placeholder="LinkedIn-friendly text will appear here..." readonly></textarea>
    </div>

    <div class="buttons">
        <button id="copy-button" class="cta-button" onclick="copyToClipboard()">Copy to Clipboard</button>
        <button class="cta-button" onclick="clearText()">Clear</button>
    </div>
</div>
