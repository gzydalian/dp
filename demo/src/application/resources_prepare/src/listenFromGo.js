import {asticode} from "./asticode"
let lfg = {
    listen:function () {
        astilectron.onMessage(function(message) {
            switch (message.name) {
                case "about":
                    lfg.about(message.payload)
                    return {payload: "payload"}
                    break
                case "about2":
                    lfg.about(message.payload)
                    return {payload: "payload"}
                    break
                case "welcome":
                    asticode.notifier.info(message.payload)
                    break
                case "onPublish":
                    console.log(message.payload + " received.")
                    break
            }
        })
    },
    about:function(html) {
        let c = document.createElement("div")
        c.innerHTML = html
        asticode.modaler.setContent(c)
        asticode.modaler.show()
    },
}

export {lfg}