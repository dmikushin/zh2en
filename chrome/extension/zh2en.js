function translateSelection()
{
	let sel = window.getSelection();
	if (sel.getRangeAt && sel.rangeCount)
	{
		let range = sel.getRangeAt(0);
		range.deleteContents();
		let translation = "it works!";
		range.insertNode(document.createTextNode(translation));
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

