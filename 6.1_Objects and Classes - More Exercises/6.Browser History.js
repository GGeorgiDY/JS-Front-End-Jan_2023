function browserHistory(a, b) {
    let brouserName = 'None'
    let openTabs = {}
    let recentlyClosed = {}
    let browserLogs = {}

    for (const key of Object.keys(a)) {

        if (key === 'Browser Name') {
            brouserName = a[key]
        }

        else if (key === 'Open Tabs') {
            for (const el of a[key]) {
                if (!openTabs.hasOwnProperty(key)) {
                    openTabs[key] = []
                }
                openTabs[key].push(el)
            }
        }

        else if (key === 'Recently Closed') {
            for (const el of a[key]) {
                if (!recentlyClosed.hasOwnProperty(key)) {
                    recentlyClosed[key] = []
                }
                recentlyClosed[key].push(el)
            }
        }

        else if (key === 'Browser Logs') {
            for (const el of a[key]) {
                if (!browserLogs.hasOwnProperty(key)) {
                    browserLogs[key] = []
                }
                browserLogs[key].push(el)
            }
        }
    }

    // console.log(brouserName)
    // console.log(openTabs)
    // console.log(recentlyClosed)
    // console.log(browserLogs)

    for (const el of b) {
        if (el === 'Clear History and Cache') {
            openTabs = {'Open Tabs': []}
            recentlyClosed = {'Recently Closed': []}
            browserLogs = {'Browser Logs': []}
        } else {
            let couple = el.split(' ')
            let [command, tool] = couple

            if (command === 'Open') {
                if (!openTabs.hasOwnProperty('Open Tabs')) {
                    openTabs['Open Tabs'] = []
                }
                openTabs['Open Tabs'].push(tool)

                browserLogs['Browser Logs'].push(el)
            }

            else if (command ===  'Close') {
                for (const arr of Object.values(openTabs)) {

                    for (const ell of arr) {
                        if (ell === tool) {
                            const index = arr.indexOf(tool)
                            arr.splice(index, 1)

                            recentlyClosed['Recently Closed'].push(tool)

                            browserLogs['Browser Logs'].push(el)
                        }
                    }
                }
            }
        }
    }

    console.log(brouserName)

    for (const key of Object.keys(openTabs)) {
        console.log(`${key}: ${openTabs[key].join(', ')}`)
    }

    for (const key of Object.keys(recentlyClosed)) {
        console.log(`${key}: ${recentlyClosed[key].join(', ')}`)
    }

    for (const key of Object.keys(browserLogs)) {
        console.log(`${key}: ${browserLogs[key].join(', ')}`)
    }
}

// browserHistory({
//     "Browser Name":"Google Chrome",
//     "Open Tabs":["Facebook","YouTube","Google Translate"], 
//     "Recently Closed":["Yahoo","Gmail"], 
//     "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
//     ["Close Facebook", "Open StackOverFlow", "Open Google"]
// )

browserHistory({
    "Browser Name":"Mozilla Firefox", 
    "Open Tabs":["YouTube"], 
    "Recently Closed":["Gmail", "Dropbox"], 
    "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]}, 
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
)