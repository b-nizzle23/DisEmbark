import { firestore } from './firebase.js'

async function pushData(data){
    try {
        const docRef = await firestore.collection('pin').add(data);
        console.log('Document ID: ', docRef.id);
    }catch (e) {
        console.log('error ', e);
    }
    };

    const dataToPush = {
        color: ''
    }

return pushData(dataToPush)


async function getPinsByTag(Sensory) {
    try {
        const pinsRef = firestore.collection('pin');
        const querySnapshot = await pinsRef.where('tag', '==', tag).get();
        const pins = [];
        querySnapshot.forEach(doc => {
            pins.push({ id: doc.id, category: doc.type, xy: doc.coordinates, ...doc.data() });
        });
        return pins;
    } catch (error) {
        console.error('Error fetching pins by tag:', error);
        return [];
    }
}

