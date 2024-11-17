// ***DO NOT EDIT THIS PART
function randomString() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 5) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

const userIds = [];
const userNames = [];
const userPhotos = [];
for (let i = 1; i <= 100000; i++) {
    userIds.push(i);
    userNames.push({ userId: i, name: randomString() });
    userPhotos.push({ userId: i, photo: `${randomString()}.png` });
}
// DO NOT EDIT THIS PART***

// Original inefficient version using .find()
function generateUsersDetail(userIds, userNames, userPhotos) {
    const result = [];

    userIds.forEach((userId) => {
        result.push({
            userId,
            fullName: userNames?.find(uD => uD.userId === userId)?.name || '',
            photo: userPhotos?.find(uD => uD.userId === userId)?.photo || '',
        })
    })
    return result;
}

// Optimized version using hash maps
function generateUsersDetailOptimized(userIds, userNames, userPhotos) {
    // Create hash maps for O(1) lookups
    const nameMap = new Map(userNames.map(user => [user.userId, user.name]));
    const photoMap = new Map(userPhotos.map(user => [user.userId, user.photo]));

    // Single pass through userIds
    return userIds.map(userId => ({
        userId,
        fullName: nameMap.get(userId) || '',
        photo: photoMap.get(userId) || ''
    }));
}

// Alternative using object as hash map (slightly faster than Map)
function generateUsersDetailOptimized2(userIds, userNames, userPhotos) {
    // Create hash maps using objects
    const nameMap = Object.fromEntries(
        userNames.map(user => [user.userId, user.name])
    );
    const photoMap = Object.fromEntries(
        userPhotos.map(user => [user.userId, user.photo])
    );

    // Single pass through userIds
    return userIds.map(userId => ({
        userId,
        fullName: nameMap[userId] || '',
        photo: photoMap[userId] || ''
    }));
}

// ***DO NOT EDIT THIS PART
console.time('generateUsersDetail');
generateUsersDetailOptimized2(userIds, userNames, userPhotos);
console.timeEnd('generateUsersDetail');
// DO NOT EDIT THIS PART***