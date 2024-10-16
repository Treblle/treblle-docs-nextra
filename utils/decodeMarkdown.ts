export function decodeMarkdown(markdown: any) {
    // Replace double backslashes with single backslashes
    let decoded = markdown.replace(/\\([*#\[\]()])/g, "$1");

    // Decode HTML entities like &lt;, &gt;, etc.
    decoded = decoded
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
        .replace(/\\+/g, "");

    return decoded;
}
