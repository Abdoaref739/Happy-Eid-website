let main_sentence = document.getElementById("main-sentence");
function Change_Words() {
    let i = 0;
    let new_line = "<br>"
    let words_list = ["happy Eid", "عيد سعيد", "Joyeux Eid", "Frohes Eid", "Felice Eid", "عید مبارک", "ईद मुबारक", "ঈদ মোবারক", "Selamat Hari Raya", "Mutlu Bayramlar", `01001000 01100001 01110000  01110000 ${new_line} 01111001 00100000 01000101 01101001 01100100`];
    let font_list = ["'Times New Roman', Times, serif", "'Courier New', Courier, monospace", "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"];
        function change_word(){
            if(i < words_list.length){
                main_sentence.innerHTML = words_list[i];
                i++;
                main_sentence.style.fontFamily = font_list[i];
                console.log(i)
                if(i == 11){
                    Change_Words();
                }
            }

        }
    setInterval(change_word, 2000);
    }
Change_Words();

