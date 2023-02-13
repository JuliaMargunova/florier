import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";


import { productsAPI } from '../../API/api';

const initialState = {
    // items: [{
    //     ProductId: 597,
    //     Title: "Цветочный рай Букет из 11 разноцветных тюльпанов в крафте",
    //     TranslitTitle: "cvetochnyj-raj-buket-iz-11-raznocvetnykh-tyulpanov-v-krafte",
    //     Price: 30,
    //     MainSmallPhoto: "http://florier-api.somee.com/api/Images/ProductPhotos/Small/b700a05f-939b-4492-9a7d-7bb1ac48b71b.jpeg",
    //     Rating: 0,
    //     Width: 25,
    //     Height: 40,
    //     Components: [
    //         {
    //             PlantId: 0,
    //             Title: "Тюльпан",
    //             Count: 11
    //         }
    //     ],
    //     ShopTitle: "Цветочный рай",
    //     IsCourierDelivery: true,
    //     IsPickupDelivery: true,
    //     BouquetQualityAverage: 3,
    //     FavoriteId: 0,
    //     Supply: {
    //         SupplyId: 597,
    //         IsSupply: true,
    //         Today: false,
    //         Tomorrow: true,
    //         Preorder: true,
    //         PreorderCountDays: 7,
    //         IsScheduled: false,
    //         SupplyPeriods: null,
    //         SupplyGuid: null
    //     },
    //     Latitude: "53.132908",
    //     Longitude: "26.013621"
    // }],
    items: [{
        productId: 0,
        title: "",
        price: 0,
        priceFormatBYN: "",
        priceFormatBYR: "",
        mainSmallPhoto: "",
        rating: 0,
        widthFormat: "",
        heightFormat: "",
        sizeFormat: "",
        components: [
            {
                plantId: 0,
                title: "Тюльпан",
                count: 11
            }
        ],
        shopTitleFormat: "",
        viewLink: "",
        isCourierDelivery: false,
        isPickupDelivery: false,
        bouquetQualityAverage: 0,
        supply: {
            supplyId: 597,
            isSupply: true,
            today: false,
            tomorrow: true,
            preorder: true,
            preorderCountDays: 7,
            isScheduled: false,
            supplyPeriods: null,
            supplyGuid: null
        },
    }],
    status: ""
};

export const fetchProducts = createAsyncThunk('product/fetchProducts',
    async () => {
        const { data } = await productsAPI.getProducts();
        return data;
    });

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct(state, action) {
            state.categoryId = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            console.log('pending');
        });

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload.map((item) => (
                {
                    productId: item.ProductId,
                    title: item.Title,
                    price: item.Price,
                    priceFormatBYN: item.Price.toString().replace('.', ',') + ' BYN ',
                    priceFormatBYR: parseInt(item.Price * 10000) + ' BYR',
                    mainSmallPhoto: item.MainSmallPhoto,
                    rating: item.Rating,
                    widthFormat: 'Ширина ' + item.Width + ' см',
                    heightFormat: 'Высота ' + item.Height + ' см',
                    sizeFormat: '↔ ' + item.Width + 'см    ↕ ' + item.Height + 'см',
                    components: item.Components.map((plant,i) => ({
                        plantId: i,
                        title: plant.Title,
                        count: plant.Count
                    })),
                    shopTitleFormat: 'Букет создал магазин «' + item.ShopTitle + '»',
                    viewLink: '/product/' + item.ProductId + (item.TranslitTitle ? '/' + item.TranslitTitle : ''),
                    isCourierDelivery: item.IsCourierDelivery ? true : false,
                    isPickupDelivery: item.IsPickupDelivery ? true : false,
                    bouquetQualityAverage: !isNaN(item.BouquetQualityAverage)
                        ? item.BouquetQualityAverage
                        : 0,
                    supply: item.Supply
                }

            ));


        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            console.log('rejected');
        });
    },
});

// export const getUsersThunkCreator = (page, pageSize) => {
//     return async (dispatch) => {
//         dispatch(setCurrentPage(page));
//         dispatch(setFetching(true));
//         dispatch(setCurrentPage(page));
//         let data = await userAPI.getUsers(page, pageSize);
//         dispatch(setFetching(false));
//         dispatch(setUsers(data.items));
//         dispatch(setTotalCount(data.totalCount));

//     }
// }

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;