function translateSelection()
{
	let sel = window.getSelection();
	if (sel.getRangeAt && sel.rangeCount)
	{
		let range = sel.getRangeAt(0);
		text = range.toString();

		const req = new XMLHttpRequest();
		const baseUrl = "http://localhost:8080";

		req.open("POST", baseUrl, true);
		req.setRequestHeader("Content-type", "text/plain");
		req.onreadystatechange = function()
		{
			if (this.readyState === XMLHttpRequest.DONE && this.status === 200)
			{
				translation = this.responseText;
				range.deleteContents();
				range.insertNode(document.createTextNode(translation));
			}
		}
		req.send(text);
	}
	else
	{
		window.alert("Translation is not supported in this browser");
	}
}

chrome.action.onClicked.addListener((tab) =>
{
	chrome.scripting.executeScript(
	{
		target: { tabId: tab.id },
		function: translateSelection
	});
});

