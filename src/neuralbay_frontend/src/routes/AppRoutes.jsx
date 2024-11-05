import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Marketplace from '../pages/marketplace/marketplace'
import ModelDetails from "../pages/marketplace/[id]/Moredetails"
import GenerateImageTest from '../pages/marketplace/generate-image/test/page'
import InstructGptTest from '../pages/marketplace/instruct-gpt/test/page'
import TranscribeTest from '../pages/marketplace/transcribe/test/page'
import LoginPage from '../../login'
import UploadModel from '../pages/marketplace/upload/page'
import ThankYou from '../thank-you'
export default function AppRoutes() {
    return (
        <Routes>
            {/* Landing Page */}
            <Route path='/' element={<Home />} />
            {/* Marketplace Page */}
            <Route path='/marketplace' element={<Marketplace />} />
            <Route path='/marketplace/:id' element={<ModelDetails />} />
            <Route path='/marketplace/generate-image/test' element={<GenerateImageTest/>} />
            <Route path='/marketplace/instruct-gpt/test' element={<InstructGptTest/>} />
            <Route path='/marketplace/transcribe/test' element={<TranscribeTest/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/marketplace/upload' element={<UploadModel/>}/>
            <Route path='thank-you' element={<ThankYou/>}/>
        </Routes>
    )
}
