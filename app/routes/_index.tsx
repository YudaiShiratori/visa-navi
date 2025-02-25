/* eslint-disable react/jsx-no-comment-textnodes */
import { Link } from "@remix-run/react";

import { Header } from "~/components/header";

import type { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => [{ title: "ビザ免除情報チェッカー" }];

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* ヒーローセクション */}
      <div className="pt-28 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6 animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                日本人旅行者のための
                <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ビザ情報チェッカー
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                世界地図から簡単に各国のビザ免除情報を確認できます。
                外務省の最新情報に基づいて、渡航に必要な情報をわかりやすく提供します。
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/map"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-medium text-lg"
                >
                  ビザ情報を調べる
                  <svg className="inline-block ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              
              <div className="flex items-center gap-4 pt-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-blue-${i*100} flex items-center justify-center text-white text-xs font-bold`}>
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-gray-600">
                  <span className="font-semibold">200+</span> カ国のビザ情報を網羅
                </p>
              </div>
            </div>
            
            <div className="md:w-1/2 relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl transform rotate-3"></div>
              <img src="/images/japanese-passport-photo.jpg" alt="日本のパスポート" />
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">最新情報</p>
                    <p className="text-sm text-gray-600">2025年2月更新</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 特徴セクション */}
      <div className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              簡単3ステップ
            </span>
            でビザ情報を確認
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
                title: "地域を選択",
                description: "世界地図から地域を選んで、国を絞り込みます。"
              },
              {
                icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                title: "国を検索",
                description: "国名で直接検索して、素早く情報を見つけられます。"
              },
              {
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                title: "詳細を確認",
                description: "ビザ要件、滞在可能期間、必要書類などを確認できます。"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-md mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTAセクション */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            旅行の計画を始めましょう
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            ビザ情報チェッカーを使って、スムーズな旅行計画を立てましょう。
            最新の情報で、安心して世界を旅しましょう。
          </p>
          <Link
            to="/map"
            className="px-8 py-4 bg-white text-blue-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-medium text-lg inline-flex items-center"
          >
            今すぐビザ情報を調べる
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
      
      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xl font-bold">ビザ情報チェッカー</span>
              </Link>
              <p className="mt-2 text-gray-400 text-sm">
                日本人旅行者のためのビザ情報ポータル
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/map" className="text-gray-300 hover:text-white transition-colors">
                ビザ情報を調べる
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                このサイトについて
              </Link>
              <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                プライバシーポリシー
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                利用規約
              </Link>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ビザ情報チェッカー. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a 
                href="https://twitter.com/visachecker" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  <path d="M12 7.783c-2.326 0-4.217 1.891-4.217 4.217 0 2.326 1.891 4.217 4.217 4.217 2.326 0 4.217-1.891 4.217-4.217 0-2.326-1.891-4.217-4.217-4.217zm0 6.955c-1.512 0-2.739-1.226-2.739-2.738s1.227-2.738 2.739-2.738 2.738 1.226 2.738 2.738-1.226 2.738-2.738 2.738zM18.406 7.458c0 .554-.448 1.002-1.002 1.002-.554 0-1.002-.448-1.002-1.002 0-.554.448-1.002 1.002-1.002.554 0 1.002.448 1.002 1.002z" />
                </svg>
              </a>
              <a 
                href="https://instagram.com/visachecker" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  <path d="M12 7.783c-2.326 0-4.217 1.891-4.217 4.217 0 2.326 1.891 4.217 4.217 4.217 2.326 0 4.217-1.891 4.217-4.217 0-2.326-1.891-4.217-4.217-4.217zm0 6.955c-1.512 0-2.739-1.226-2.739-2.738s1.227-2.738 2.739-2.738 2.738 1.226 2.738 2.738-1.226 2.738-2.738 2.738zM18.406 7.458c0 .554-.448 1.002-1.002 1.002-.554 0-1.002-.448-1.002-1.002 0-.554.448-1.002 1.002-1.002.554 0 1.002.448 1.002 1.002z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
