const getInstalledApps = () => {
    const installedApps = localStorage.getItem('installed apps');

    if (installedApps) {
        const convertedtype = JSON.parse(installedApps);
        return convertedtype;
    }

    else {
        return [];
    }
}

const setInstalledApps = id => {
    const installedApps = getInstalledApps();

    installedApps.push(id)

    const convertedType = JSON.stringify(installedApps);

    localStorage.setItem('installed apps', convertedType)
}

const removeInstalledApp = id => {
    const installedApps = localStorage.getItem('installed apps');

    const convertedType = JSON.parse(installedApps);

    convertedType.pop(id)

    const jsonData = JSON.stringify(convertedType);

    localStorage.setItem('installed apps', jsonData)
}

export {getInstalledApps, setInstalledApps, removeInstalledApp}