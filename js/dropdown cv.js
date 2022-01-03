// раскрывающееся меню cv
for (let btn2 of document.getElementsByClassName('btn2')) {
                btn2.onclick = function(e) {
                    let content2Element = btn2.getElementsByClassName('dropdown-content3')[0]
                    if (!content2Element.classList.contains('show')) {
                        content2Element.classList.add('show')
                    }
                }
            }
            let close2Dropdowns = function() {
                for (let dropdown2Element of document.getElementsByClassName('dropdown-content3')) {
                    dropdown2Element.classList.remove('show')
                }
            }
            window.onclick = function(e) {
                let current2 = e.target
                // Iterate from parent to parent to parent, etc...
                while (current2 !== document.getRootNode() && !current2.classList.contains('btn2')) {
                    current2 = current2.parentNode
                }
                // We have reached the root of the document
                if (current2 === document.getRootNode()) {
                    close2Dropdowns()
                }
            }