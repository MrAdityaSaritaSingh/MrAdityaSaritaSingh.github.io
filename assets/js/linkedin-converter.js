document.addEventListener("DOMContentLoaded", function () {
    const markdownInput = document.getElementById("markdown-input");
    if (markdownInput) {
        markdownInput.addEventListener("keyup", convertMarkdown);
    }
});

function toBoldUnicode(text) {
    const boldMap = {
        A: "𝗔",
        B: "𝗕",
        C: "𝗖",
        D: "𝗗",
        E: "𝗘",
        F: "𝗙",
        G: "𝗚",
        H: "𝗛",
        I: "𝗜",
        J: "𝗝",
        K: "𝗞",
        L: "𝗟",
        M: "𝗠",
        N: "𝗡",
        O: "𝗢",
        P: "𝗣",
        Q: "𝗤",
        R: "𝗥",
        S: "𝗦",
        T: "𝗧",
        U: "𝗨",
        V: "𝗩",
        W: "𝗪",
        X: "𝗫",
        Y: "𝗬",
        Z: "𝗭",
        a: "𝗮",
        b: "𝗯",
        c: "𝗰",
        d: "𝗱",
        e: "𝗲",
        f: "𝗳",
        g: "𝗴",
        h: "𝗵",
        i: "𝗶",
        j: "𝗷",
        k: "𝗸",
        l: "𝗹",
        m: "𝗺",
        n: "𝗻",
        o: "𝗼",
        p: "𝗽",
        q: "𝗾",
        r: "𝗿",
        s: "𝘀",
        t: "𝘁",
        u: "𝘂",
        v: "𝘃",
        w: "𝘄",
        x: "𝘅",
        y: "𝘆",
        z: "𝘇",
        0: "𝟬",
        1: "𝟭",
        2: "𝟮",
        3: "𝟯",
        4: "𝟰",
        5: "𝟱",
        6: "𝟲",
        7: "𝟳",
        8: "𝟴",
        9: "𝟵",
    };
    return text
        .split("")
        .map((char) => boldMap[char] || char)
        .join("");
}

function toItalicUnicode(text) {
    const italicMap = {
        A: "𝘈",
        B: "𝘉",
        C: "𝘊",
        D: "𝘋",
        E: "𝘌",
        F: "𝘍",
        G: "𝘎",
        H: "𝘏",
        I: "𝘐",
        J: "𝘑",
        K: "𝘒",
        L: "𝘓",
        M: "𝘔",
        N: "𝘕",
        O: "𝘖",
        P: "𝘗",
        Q: "𝘘",
        R: "𝘙",
        S: "𝘚",
        T: "𝘛",
        U: "𝘜",
        V: "𝘝",
        W: "𝘞",
        X: "𝘟",
        Y: "𝘠",
        Z: "𝘡",
        a: "𝘢",
        b: "𝘣",
        c: "𝘤",
        d: "𝘥",
        e: "𝘦",
        f: "𝘧",
        g: "𝘨",
        h: "𝘩",
        i: "𝘪",
        j: "𝘫",
        k: "𝘬",
        l: "𝘭",
        m: "𝘮",
        n: "𝘯",
        o: "𝘰",
        p: "𝘱",
        q: "𝘲",
        r: "𝘳",
        s: "𝘴",
        t: "𝘵",
        u: "𝘶",
        v: "𝘷",
        w: "𝘸",
        x: "𝘹",
        y: "𝘺",
        z: "𝘻",
    };
    return text
        .split("")
        .map((char) => italicMap[char] || char)
        .join("");
}

function toMonospaceUnicode(text) {
    const monospaceMap = {
        A: "𝙰",
        B: "𝙱",
        C: "𝙲",
        D: "𝙳",
        E: "𝙴",
        F: "𝙵",
        G: "𝙶",
        H: "𝙷",
        I: "𝙸",
        J: "𝙹",
        K: "𝙺",
        L: "𝙻",
        M: "𝙼",
        N: "𝙽",
        O: "𝙾",
        P: "𝙿",
        Q: "𝚀",
        R: "𝚁",
        S: "𝚂",
        T: "𝚃",
        U: "𝚄",
        V: "𝚅",
        W: "𝚆",
        X: "𝚇",
        Y: "𝚈",
        Z: "𝚉",
        a: "𝚊",
        b: "𝚋",
        c: "𝚌",
        d: "𝚍",
        e: "𝚎",
        f: "𝚏",
        g: "𝚐",
        h: "𝚑",
        i: "𝚒",
        j: "𝚓",
        k: "𝚔",
        l: "𝚕",
        m: "𝚖",
        n: "𝚗",
        o: "𝚘",
        p: "𝚙",
        q: "𝚚",
        r: "𝚛",
        s: "𝚜",
        t: "𝚝",
        u: "𝚞",
        v: "𝚟",
        w: "𝚠",
        x: "𝚡",
        y: "𝚢",
        z: "𝚣",
        0: "𝟶",
        1: "𝟷",
        2: "𝟸",
        3: "𝟹",
        4: "𝟺",
        5: "𝟻",
        6: "𝟼",
        7: "𝟽",
        8: "𝟾",
        9: "𝟿",
    };
    return text
        .split("")
        .map((char) => monospaceMap[char] || char)
        .join("");
}

function toStrikethrough(text) {
    return text
        .split("")
        .map((char) => char + "\u0336")
        .join("");
}

function convertMarkdown() {
    const markdownInput = document.getElementById("markdown-input").value;
    let convertedText = markdownInput;

    // Convert code blocks (e.g., ```text```)
    convertedText = convertedText.replace(/```([\s\S]*?)```/g, (match, text) =>
        toMonospaceUnicode(text)
    );

    // Convert strikethrough (e.g., ~~text~~)
    convertedText = convertedText.replace(/~~(.*?)~~/g, (match, text) =>
        toStrikethrough(text)
    );

    // Convert headings (e.g., # Title)
    convertedText = convertedText.replace(/^#+\s+(.*)/gm, (match, text) =>
        toBoldUnicode(text)
    );

    // Convert bold (e.g., **text** or __text__)
    convertedText = convertedText.replace(
        /\*\*(.*?)\*\*|__(.*?)__/g,
        (match, p1, p2) => toBoldUnicode(p1 || p2)
    );

    // Convert italic (e.g., *text* or _text_)
    convertedText = convertedText.replace(
        /\*(.*?)\*|_(.*?)_/g,
        (match, p1, p2) => toItalicUnicode(p1 || p2)
    );

    // Convert links (e.g., [text](url)) to "text (url)"
    convertedText = convertedText.replace(
        /\[(.*?)\]\((.*?)\)/g,
        (match, text, url) => {
            if (text === url) {
                return url;
            } else {
                return `${text} (${url})`;
            }
        }
    );

    // Convert unordered lists (e.g., * item, - item, + item) to "• item"
    convertedText = convertedText.replace(/^[\t ]*["\*\-\+]\s+(.*)/gm, "• $1");

    // Convert ordered lists (e.g., 1. item) - LinkedIn supports this natively, so we can just remove extra indentation
    convertedText = convertedText.replace(/^\s*\d+\.\s+(.*)/gm, "$1");

    // Remove blockquotes
    convertedText = convertedText.replace(/^>\s?/gm, "");

    // Remove horizontal rules
    convertedText = convertedText.replace(/^-{3,}|_{3,}|\*{3,}/g, "");

    // Remove images e.g., ![alt text](url)
    convertedText = convertedText.replace(/!\[(.*?)\]\((.*?)\)/g, "");

    // Clean up extra newlines
    convertedText = convertedText.replace(/\n{3,}/g, "\n\n");

    document.getElementById("linkedin-output").value = convertedText.trim();
}

function copyToClipboard() {
    const linkedinOutput = document.getElementById("linkedin-output");
    linkedinOutput.select();
    linkedinOutput.setSelectionRange(0, 99999); // For mobile devices

    try {
        navigator.clipboard.writeText(linkedinOutput.value);
        const copyButton = document.querySelector("#copy-button");
        const originalText = copyButton.innerText;
        copyButton.innerText = "Copied!";
        setTimeout(() => {
            copyButton.innerText = originalText;
        }, 2000);
    } catch (err) {
        console.error("Failed to copy: ", err);
        alert("Failed to copy text. Please copy it manually.");
    }
}

function clearText() {
    document.getElementById("markdown-input").value = "";
    document.getElementById("linkedin-output").value = "";
}
