enum eStorageKeys {
    framework = 'framework',
    likes = 'likes',
}

export const getFramework = () => {
    const entry = localStorage.getItem(eStorageKeys.framework);
    return entry;
};

export const saveFramework = (frameworkValue: string) => {
    localStorage.setItem(eStorageKeys.framework, frameworkValue);
};

export const getLikes = () => {
    const entry = localStorage.getItem(eStorageKeys.likes);
    return entry;
};

export const saveLikes = (likes: string[]) => {
    const likesParsed = JSON.stringify(likes);
    localStorage.setItem(eStorageKeys.likes, likesParsed);
};
