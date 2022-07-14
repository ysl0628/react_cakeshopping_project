/* Context 相當於一個公共的存儲空間 
    我們可以將多個組件中都需要訪問的數據統一儲存到一個Context中，
    這樣不需通過 props 即可傳遞

    通過 React.createContext() 建立 Context

    使用方式一：
    1. 引入 Context
    2. 使用 Xxx.Consumer 組件來建立元素
        Condumer 的標籤體需要一個回調函數
        會將 Context 設置為回調函數的參數， 通過參數就可以取得 Context 中儲存的數據
    
    使用方式二：
    1. 引入 Context
    2. 使用 useContext() 來取得 context
        useContext()需要一個 Context 做為參數
        他會將 Context 中數據獲取，並作為返回值返回

    Xxx.Provider
        - 表示數據的生產者，可以使用它來指定 Context 中的數據
        - 通過 Value 來指定 Context 中儲存的數據，在該組件中的所有子組件都可以通過 Context 來訪問它所指定的數據
*/
