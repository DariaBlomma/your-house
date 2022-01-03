// раскрывающееся меню request
 for (let btn of document.getElementsByClassName('btn')) {
                btn.onclick = function(e) {
                    let contentElement = btn.getElementsByClassName('dropdown-content2')[0]
                    if (!contentElement.classList.contains('show')) {
                        contentElement.classList.add('show')
                    }
                }
            }
            let closeDropdowns = function() {
                for (let dropdownElement of document.getElementsByClassName('dropdown-content2')) {
                    dropdownElement.classList.remove('show')
                }
            }
           window.onclick = function(e) {
                let current = e.target
                // Iterate from parent to parent to parent, etc...
                while (current !== document.getRootNode() && !current.classList.contains('btn')) {
                    current = current.parentNode
                }
                // We have reached the root of the document
                if (current === document.getRootNode()) {
                    closeDropdowns()
                }
            }


