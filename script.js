let files = [];

function createFile() {
    const fileName = document.getElementById("new-file-name").value;
    if (fileName) {
        files.push(fileName);
        updateFileList();
        document.getElementById("new-file-name").value = '';
    }
}

function updateFileList() {
    const fileList = document.getElementById("file-list");
    fileList.innerHTML = '';
    files.forEach(file => {
        const li = document.createElement('li');
        li.textContent = file;
        li.onclick = () => openFile(file);
        fileList.appendChild(li);
    });
}

function openFile(fileName) {
    document.getElementById("text-editor").style.display = 'block';
    document.getElementById("editor").value = `Contents of ${fileName}`;
}

function saveFile() {
    const content = document.getElementById("editor").value;
    alert(`File saved with content:\n${content}`);
}

function toggleWindow(windowId) {
    const windows = ['file-explorer', 'text-editor', 'web-browser'];
    windows.forEach(win => {
        const element = document.getElementById(win);
        element.style.display = win === windowId ? 'block' : 'none';
    });
}

function searchGoogle() {
    const query = document.getElementById("search-query").value;
    const resultsContainer = document.getElementById("search-results");
    
    if (query) {
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        resultsContainer.innerHTML = `<p><a href="${googleSearchUrl}" target="_blank">Click here to see results for "${query}" on Google</a></p>`;
    } else {
        resultsContainer.innerHTML = `<p>Please enter a search query.</p>`;
    }
}
