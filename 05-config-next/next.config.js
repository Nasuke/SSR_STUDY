/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // 严格模式
    env: {
        PORT: 9999
    },
    basePath: 'music' // 用/music才能访问首页
    // images 
    // swcMinify Speedy Web Compiler 编译和压缩技术 而不是Babel + Terser
}

module.exports = nextConfig
