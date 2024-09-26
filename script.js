var len;
var results = '';

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "c70d5e9cc44d4987bf2e2e640155181b");
      },
      type: "GET",
  })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

      $('#searchResults').html(results);
        $('#searchResults').dialog();
        console.log(params);
    })
    .fail(function () {
        alert("error");
    });
}

function clickSearch() {
    apiSearch()
}

function changeBackground() {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1707305304379-748132d53a4b?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    document.getElementById('engineName').style.color = "black";
    document.getElementById('engineName').style.textShadow = "2px 2px white";
    setTimeout(changeAgain, 5000);
}

function changeAgain() {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1726959243174-261968103da3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
}
function clickTime() {
    const time = new Date();
    console.log(time.getHours() + ":" + time.getMinutes());
    $("#time").dialog();
    let timeDiv = document.getElementById('time');
    let html = `
    <p>${time.getHours() + ":" + addZero(time.getMinutes())}</p>`
    timeDiv.innerHTML = html;
}

function clickLucky() {
    var params = {
        "q": $("#query").val(),
        "count": "50",
        "offset": "0",
        "mkt": "en-us"
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "c70d5e9cc44d4987bf2e2e640155181b");
        },
        type: "GET",
    })
        .done(function (data) {
            window.location.href = data.webPages.value[0].url;
        })
        .fail(function () {
            alert("error");
        });
}

function addZero(i) {
    if (i < 10) { i = "0" + i }
    return i;
}