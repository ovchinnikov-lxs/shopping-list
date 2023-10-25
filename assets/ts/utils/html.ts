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

export {
    copyTextToClipboard,
};
