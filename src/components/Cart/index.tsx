import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image';
import {X} from "phosphor-react"
import { CartButton } from "../CartButton";
import { CartClose, CartContent, CartFinalization, CartProduct, CartProductDetails, CartProductImage, FinalizationDetails } from './styles';

export function Cart() {
return(
    <Dialog.Root>
        <Dialog.Trigger asChild>
            <CartButton />
        </Dialog.Trigger>

        <Dialog.Portal>
            <CartContent>
                <CartClose>
                    <X size={24} weight="bold" />
                </CartClose>

                <h2>Sacola de compras</h2>

                <section>
                    {/* <p>Parece que se carrinho está vazio :(</p> */}
                

                <CartProduct>
                    <CartProductImage>
                        <Image
                            width={100}
                            height={93}
                            alt=""
                            src={"https://s3-alpha-sig.figma.com/img/387d/13ce/de131bd1ccf9bbe6b2331e88d3df20cd?Expires=1674432000&Signature=ap6DOofqM94T3nch~YWrWSJKbW0ehLAtIqOHHv7XRXjxndnQ3YCmE3kKT74iknWXJHAyftzSoPczcilfC-v7w8UJCOPXMLiyi0bRnZRXKdKO-qupRC2JLoDeQQ89SlAVVpQTYAb4U8tmKgcxXQbSFjklWYthS3GFpC3Cg8jxOAnA6KdqmIky~wTbHODLfWBFAiEhQU8hDbG6faTZ2fZk1Eoao1G7mqXgnfNYd00vfiHmqshg05WOQeOgdbW-Xe8yzfOWGPN89Q1VKwgVM9lzdSTNWNLS9s4hGSxktN6HbWLpk~9mrZMTkopuo855AI~gsh6kwCIvpX6TK0IqAh9RBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
                        />
                    </CartProductImage>
                    <CartProductDetails>
                        <p>Produto 1</p>
                        <strong>R$50,00</strong>
                        <button>Remover</button>
                    </CartProductDetails>
                </CartProduct>
                </section>

                <CartFinalization>
                    <FinalizationDetails>
                        <div>
                            <span>Quantidade</span>
                            <p>2 itens</p>
                        </div>
                        <div>
                            <span>Valor Total</span>
                            <p>R$100,00</p>
                        </div>
                    </FinalizationDetails>
                    <button>Finalizar Compra</button>
                </CartFinalization>

            </CartContent>
        </Dialog.Portal>
    </Dialog.Root>
)
}