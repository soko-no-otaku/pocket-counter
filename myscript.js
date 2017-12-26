function countArticles() {
    var count = document.getElementsByClassName("item_content").length;
    if (count >= 30) {
        count = " (30+)";
    } else {
        count = " (" + count + ")";
    }

    document.getElementsByClassName("queue_title")[1].innerHTML += count;
    document.title += count;
}

setTimeout(countArticles, 1000);
