import { create } from "zustand";


export const useFiltersArray = create((set) => ({
    sourceFilters: [], 
    dateFilters: [], 
    addSourceFilter: (newFilter) => set(state => ({sourceFilters: [...state.sourceFilters, newFilter]})), 
    remSourceFilter : (deletedFilter) => set(state => ({sourceFilters: state.sourceFilters.filter(filter => filter !== deletedFilter)})), 
    emptySourceFilter: () => set(state => ({sourceFilters: []})),
    filterSourceByOne: (newFilter) => set(state => ({sourceFilters:[newFilter]})), 
    addDateFilter: (newFilter) => set(state => ({dateFilters: [...state.dateFilters, newFilter]})),
    remDateFilter:(deletedFilter) => set(state => ({dateFilters: state.dateFilters.filter(filter => filter !== deletedFilter)})), 
    emptyDateFilter: () => set(state => ({dateFilters: []})),
    filterDateByOne: (newFilter) => set(state => ({dateFilters:[newFilter]}))
})); 