import firebase from "firebase/app";
import Apartment from "../../entity/Apartment";
import Address from "../../entity/Address";
import Vendor from "../../entity/Vendor";

const data = {
        type: "flat",
        id: 1,
        attributes: {
            preview: 'https://firebasestorage.googleapis.com/v0/b/development-8ca9b.appspot.com/o/apartments%2F90.jpg?alt=media&token=f39dcbc3-f331-4f35-8d90-a0fe9fc831ab',
            title: "3-х комнатная на Минской",
            rooms: 3,
            address: {
                city: "Tyumen",
                street: "Минская",
                house: "3a",
                room: "123"
            },
            area: 134,
            unit: "квм"
        },
        relationships: {
            type: "agent",
            id: 2,
            attributes: {
                first_name: "Василий",
                last_name: "Дроздов",
                middle_name: "Михайлович"
            }
        }
    }
export default {
    namespaced: true,
    state: {
        list: {}
    },
    mutations: {
        updateApartmentList: (state, payload) => {
            const list = {}
            Object.keys(payload).map(key => {
                const data = payload[key].attributes;
                const dataVendor = payload[key].relationships.attributes;
                const apartment = new Apartment(key, data.preview, data.title, data.rooms, data.area, data.unit, data.like);
                const address = new Address(data.address);
                const vendor = new Vendor(dataVendor.first_name, dataVendor.first_name, dataVendor.middle_name);
                apartment.setAddress(address);
                apartment.setVendor(vendor);
                list[key] = apartment
            })
            state.list = list

        },
        updateApartment: (state, id) => {
            state.list[id].like = !state.list[id].like
        }
    },
    actions: {
        getApartmentList: async ({commit}) => {
            try {
                const response = await firebase.database().ref().child('apartments').get()
                const list = response.val()
                commit('updateApartmentList', list)
            } catch (error) {
                console.log(error)
            }
           /* try {
                const res = firebase.database().ref('/apartments').push(data)
                console.log(res)
            } catch (error) {
                console.log(error)
            }*/
        },
        likeApartment: async ({state, commit}, id) => {
            const apartment = state.list[id]
            console.log(state.list)
            try {
                await firebase.database().ref(`apartments/${id}/attributes/like`).set(!apartment.like)
                commit('updateApartment', id)
            } catch (error) {
                console.log(error)
            }
        }
    }
}
