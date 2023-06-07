export const filtersinitialState = {
    products: [],
    filteredproducts: [],
    priceRange: 9000,
    categoryFilter: [],
    animeFilter: [],
    ratingFilter: 1,
    sortBy: '',
    searchName: '',
}

const handleFilters = (state) => {
    const {
        products,
        priceRange,
        categoryFilter,
        animeFilter,
        ratingFilter,
        sortBy,
        searchName
    } = state;
    const PriceRangeValue = products.filter(({price}) => price <= priceRange);
    const SortPriceValue = sortBy.length > 0
        ? (sortBy.includes('LTH')
            ? [...PriceRangeValue].sort((a, b) => a.price - b.price)
            : [...PriceRangeValue].sort((a, b) => b.price - a.price))
        : PriceRangeValue;
    const RatingFilterValue = SortPriceValue.filter(({rating}) => rating >= ratingFilter);
    const categoryFilterValue = categoryFilter.length > 0
        ? RatingFilterValue.filter(({categoryName}) => categoryFilter.includes(categoryName))
        : RatingFilterValue;
    const animeFilterValue = animeFilter.length > 0
        ? categoryFilterValue.filter(({anime}) => animeFilter.includes(anime))
        : categoryFilterValue;
    const searchNameFilterValue = searchName.length > 0
        ? animeFilterValue.filter(({title}) => title.toLowerCase().includes(searchName.toLowerCase()))
        : animeFilterValue;
    return searchNameFilterValue;
}

export const FilterReducer = (state, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS_FOR_FILTER':
            return {
                ...state,
                products: action.payload,
                filteredproducts: action.payload
            }
        case 'FILTER_BY_PRICE_RANGE':
            return {
                ...state,
                priceRange: action.payload,
                filteredproducts: handleFilters({
                    ...state,
                    priceRange: action.payload
                })
            }
        case 'SORT_BY_PRICE':
            return {
                ...state,
                sortBy: action.payload,
                filteredproducts: handleFilters({
                    ...state,
                    sortBy: action.payload
                })
            }
        case 'FILTER_BY_RATING':
            return {
                ...state,
                ratingFilter: action.payload,
                filteredproducts: handleFilters({
                    ...state,
                    ratingFilter: action.payload
                })
            }
        case 'FILTER_BY_CATEGORY':
            return {
                ...state,
                categoryFilter: (state.categoryFilter.includes(action.payload)
                    ? state.categoryFilter.filter((categoryName) => categoryName !== action.payload)
                    : ([
                        ...state.categoryFilter,
                        action.payload
                    ])),
                filteredproducts: handleFilters({
                    ...state,
                    categoryFilter: (state.categoryFilter.includes(action.payload)
                        ? state.categoryFilter.filter((categoryName) => categoryName !== action.payload)
                        : ([
                            ...state.categoryFilter,
                            action.payload
                        ]))
                })
            }
        case 'FILTER_BY_ANIME':
            return {
                ...state,
                animeFilter: (state.animeFilter.includes(action.payload)
                    ? state.animeFilter.filter((anime) => anime !== action.payload)
                    : ([
                        ...state.animeFilter,
                        action.payload
                    ])),
                filteredproducts: handleFilters({
                    ...state,
                    animeFilter: (state.animeFilter.includes(action.payload)
                        ? state.animeFilter.filter((anime) => anime !== action.payload)
                        : ([
                            ...state.animeFilter,
                            action.payload
                        ]))
                })
            }
        case 'FILTER_BY_SEARCH':
            return {
                ...state,
                searchName: action.payload,
                filteredproducts: handleFilters({
                    ...state,
                    searchName: action.payload
                })
            }
        case 'RESET_FILTERS':
            return {
                ...state,
                filteredproducts: state.products,
                priceRange: 9000,
                categoryFilter: [],
                animeFilter: [],
                ratingFilter: 1,
                sortBy: '',
                searchName: ''
            };
        default:
            return state
    }
}