import { NextRequest, NextResponse } from "next/server";

/**
 * 
 * 1. API请求 router切换 资源加载 站点图片
 */
export function middleware(req: NextRequest) {
    // console.log("中间件截取 =>", req.url);
    

    // 1. 常用请求参数
    // console.log(req.nextUrl);
    
    // 2. 返回next 和没有返回效果一样 直接放行
    // return NextResponse.next() 

    // 3. 返回重定向
    
        // 3.1 获取token
    const token = req.cookies.get("token")?.value
    if (!token && req.nextUrl.pathname !== "/login") {
        return NextResponse.redirect(new URL("/login", req.nextUrl.origin))
    } 
    // 4. 返回重写(query会保留) 反向代理  req --> localhost --> 外部
    if (req.nextUrl.pathname.startsWith("/juanpi/api")) {
        return NextResponse.rewrite(new URL(req.nextUrl.pathname, "http://codercba.com:9060"))
    }
}

export const config = {
    // 1.mather可以是字符串 | 数组

    // 匹配不包含_next
    matcher: ["/((?!_next/static).*)"]
}