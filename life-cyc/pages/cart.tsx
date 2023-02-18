import { Component, ReactNode } from "react"


class Cart extends Component {
    constructor(props: any) {
        super(props)
        console.log("render---");
    }

        // 客户端 render - unwill - didmount - willun 
        // 服务器端  render -- unwill
    UNSAFE_componentWillMount(): void {
        console.log('un-will---');
    }
    componentDidMount(): void {
        console.log('did-mount---');
    }
    componentWillUnmount(): void {
        console.log('will-unmount---');

    }
    render(): ReactNode {
        return (
            <div>
                <div>Cart Page</div>
            </div>
        )
    }
}

export default Cart;