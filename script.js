function runCode() {
    const html = document.getElementById("htmlCode").value;
    const css = document.getElementById("cssCode").value;
    const js = document.getElementById("jsCode").value;

    const output = document.getElementById("output");

    output.srcdoc = `
        <html>
        <head>
            <style>${css}</style>
        </head>
        <body>
            ${html}
            <script>${js}<\/script>
        </body>
        </html>
    `;
}

document.getElementById("htmlCode").addEventListener("keyup", runCode);
document.getElementById("cssCode").addEventListener("keyup", runCode);
document.getElementById("jsCode").addEventListener("keyup", runCode);
