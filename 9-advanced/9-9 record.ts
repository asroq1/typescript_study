type PageInfo = {
	title: string
}

type Page = 'home' | 'about' | 'contact'

// 여러가지를 하나의 키로 묶고 싶을 때 record를 사용하자
const nav: Record<Page, PageInfo> = {
	home: { title: 'HOME' },
	about: { title: 'about' },
	contact: { title: 'contact' },
}

console.log(nav)

type Product = 'cat' | 'dog'
type NewProduct = Capitalize<Product>
