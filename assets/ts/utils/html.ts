const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
};
const copyTextToClipboard = (text: string): undefined | Promise<void> => {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }

    return new Promise((resolve, reject) => {
        navigator.clipboard.writeText(text).then(function() {
            resolve();
            console.log('Async: Copying to clipboard was successful!');
        }, function(err) {
            console.error('Async: Could not copy text: ', err);
            reject(err);
        });
    });
};

function textToBase64(string: string): string {
    const utf8 = unescape(encodeURIComponent(string));
    const array = new Uint8Array(utf8.length);
    for (let i = 0; i < utf8.length; i++) {
        array[i] = utf8.charCodeAt(i);
    }
    let binary = '';
    for (let i = 0; i < array.byteLength; i++) {
        binary += String.fromCharCode(array[i]);
    }
    return window.btoa(binary);
}


function base64ToText(base64: string): string {
    const binary = window.atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    const numbers = Array.from(bytes);
    const text = String.fromCharCode.apply(null, numbers);
    return decodeURIComponent(escape(text));
}

export {
    copyTextToClipboard,
    textToBase64,
    base64ToText,
};
