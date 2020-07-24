// import state from './state';

export default {
  async loadPaintings({ commit }, url) {
    const result = await fetch(url);

    if (!result.ok) {
      throw new Error(`Could not access ${this.url}`);
    }

    const paintings = await result.json();

    const sortedPaintings = [];

    paintings.items.forEach((elem) => {
      if (elem.images) {
        const year = elem.dating.begin;
        let found = false;
        sortedPaintings.forEach((element) => {
          if (element.year === year) {
            found = true;
            element.items.push(elem);
          }
        });
        if (!found) {
          const newYear = {
            year,
            items: [],
          };
          newYear.items.push(elem);
          sortedPaintings.push(newYear);
        }
      }
    });

    sortedPaintings.sort((a, b) => a.year - b.year);

    commit('mutateSetPaintings', sortedPaintings);
  },
  removeImageAction({ commit }, imgToRemove) {
    commit('mutateRemoveImage', imgToRemove);
  },
  showImageModal({ commit }, img) {
    commit('muatateShowImageModal', img);
    commit('mutateOpenModal');
  },
  closeModal({ commit }) {
    commit('mutateCloseModal');
  },
  modalNextImage({ commit }) {
    commit('mutateNextImage');
  },
  modalPrevImage({ commit }) {
    commit('mutatePrevImage');
  }
};
