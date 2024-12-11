import { createBrowserRouter, Link, useNavigate, useParams } from "react-router";
import PageNotFound from "../components/common/PageNotFound";
import AppLayout from "../pages/AppLayout";
import Categories from "../pages/Categories";
import MainPage from "../pages/MainPage";
import NewArrivals from "../pages/NewArrivals";
import Products from "../pages/Products";
import Home from "../pages/Home";
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { routes } from '../Routes/Index'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from "react-redux";
import { persistor, store } from "../redux/store.js";
import { Route, Routes } from "react-router"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import { PersistGate } from 'redux-persist/integration/react';
import { createSlice } from '@reduxjs/toolkit'
import ProductReducer, { setProducts } from '../redux/reducers/allProductsReducer.js'
import AddToCartReducer, { setAddToCart, setDeleteCart, setLessToCart } from '../redux/reducers/addToCart.js'
import axios from 'axios'
import AddProducts from "../redux/dispatch/AddProducts";
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import { CgProfile } from "react-icons/cg"
import { CiSearch } from "react-icons/ci"
import { HiBars3 } from "react-icons/hi2"
import { MdAddShoppingCart } from "react-icons/md"
import { PiSignInThin } from "react-icons/pi"
import Header from "../components/Header";
import Hero from "../components/common/Hero";
import Footer from "../components/Footer";
import { Outlet } from "react-router"
import Card from "../components/common/Card";
import NewArrival from "../components/common/NewArrival";
import TopSellingProducts from "../components/common/TopSellingProducts";
import { userReveiws } from "./constant/reviews.js";
import OverHappyCustomers from "../components/common/OverHappyCustomers";
import BrandName from "../components/common/BrandName";
import MergProducts from "../components/common/MergProducts";
import FooterContent from "../components/common/FooterContent";
import Drawer from "../components/common/drawer";
import NavLinks from "../components/common/NavLinks";
import ProfileDropdown from "../components/common/ProfileDropDown";
import {MdDeleteOutline } from 'react-icons/md';
import CartData from "../components/common/CartData";
import SignIn from "../Auth/Users/SignIn";
import CheckOutModal from "../components/common/CheckOutModal";
import PaymentForm from "../pages/PaymentForm";
import { IoCloseCircleOutline } from "react-icons/io5";
import SearchField from "../components/common/SearchField";
import SignUp from "../Auth/Users/SignUp";





export {Drawer ,SignUp ,SignIn ,SearchField ,IoCloseCircleOutline ,PaymentForm ,setLessToCart ,CheckOutModal ,setDeleteCart ,CartData ,MdDeleteOutline , NavLinks ,ProfileDropdown ,AddToCartReducer , setAddToCart , useNavigate , useParams,useEffect,FooterContent , useState, AddProducts, axios, useDispatch, useSelector, combineReducers, PageNotFound, AppLayout, Categories, MainPage, NewArrivals, Products, Home, createBrowserRouter, createRoot, RouterProvider, routes, configureStore, Provider, store, Route, Routes, persistStore, persistReducer, storage, persistor, PersistGate, createSlice, ProductReducer, setProducts, useForm, CgProfile, CiSearch, HiBars3, MdAddShoppingCart, PiSignInThin, Link, Header, Hero, Footer, Outlet, Card, NewArrival, TopSellingProducts, userReveiws, OverHappyCustomers, BrandName, MergProducts }