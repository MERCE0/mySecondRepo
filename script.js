
        let list = document.querySelector('#list');
        let inputField = document.getElementById("memo");


        inputField.addEventListener("keyup", function(event){
            if(event.key === "Enter" && this.value.trim() !== "") {
                addItem(this.value)
                this.value = ""
            }
        })

        let addItem = (inputValue) => {
            let listItem = document.createElement("li");
            listItem.innerHTML = `<span class="task-check"></span><span class="task-text">${inputValue}</span><i></i>`;

            listItem.querySelector(".task-check").addEventListener("click", function(e){
                e.stopPropagation();
                listItem.classList.toggle('done');
            })
            listItem.querySelector("i").addEventListener("click", function(e){
                e.stopPropagation();
                listItem.remove();
            })
            list.appendChild(listItem);}
           
