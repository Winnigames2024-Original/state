const urlParamsV2Params = new URLSearchParams(window.location.search);
const stateID = urlParamsV2Params.get('id');

if (stateID) {
  const targetDivv = document.getElementById('conbase');
  const htmlCodee = '<iframe src="https://winnigames2024-original.github.io/state/' + stateID + '"></iframe>';
  targetDivv.innerHTML(' <iframe src=" https://winnigames2024-original.github.io/state/ ' + stateID + ' "></iframe> ');
  //loadContent();
  //const intervalId = setInterval(loadContent, 5000);
}


function loadContent() {
  const stateURL = 'https://winnigames2024-original.github.io/state/' + stateID;
  loadAndInsertContent(stateURL, 'conbase');
}


async function loadAndInsertContent(url, targetDivId) {
  try {
    const response = await fetch(url);
    const htmlContent = await response.text(); // Получаем HTML как текст

    const targetDiv = document.getElementById(targetDivId);

    targetDiv.insertAdjacentHTML('beforeend', htmlContent);

    } catch (error) {
    console.error('Error to loading or pasting content: ', error);
    }
}
