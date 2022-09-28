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

export const getStoriesLiked = (): string[] | null => {
    const entry = localStorage.getItem(eStorageKeys.likes);
    if (entry) return JSON.parse(entry);
    return null;
};

export const saveStoriesLiked = (storyIds: string[]) => {
    const likesParsed = JSON.stringify(storyIds);
    localStorage.setItem(eStorageKeys.likes, likesParsed);
};
