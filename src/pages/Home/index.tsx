import { Atributos, HalfAtributes, HalfSection, HomeContainer, SectionApresentation, Titles } from "./styles";
import { ShoppingCart } from 'phosphor-react'
export function Home() {
  return (
    <HomeContainer>
      <SectionApresentation>
        <HalfSection>
          <Titles>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </Titles>
          <Atributos>
            <HalfAtributes>
              <div>
                <div>
                  <ShoppingCart size={16} weight="fill" />
                </div>
                <span>Compra simples e segura</span>
              </div>
              <div>
                <div>
                  <ShoppingCart size={16} weight="fill" />
                </div>
                <span>Compra simples e segura</span>
              </div>
            </HalfAtributes>
            <HalfAtributes>
              <div>
                <div>
                  <ShoppingCart size={16} weight="fill" />
                </div>
                <span>Compra simples e segura</span>
              </div>
              <div>
                <div>
                  <ShoppingCart size={16} weight="fill" />
                </div>
                <span>Compra simples e segura</span>
              </div>
            </HalfAtributes>
          </Atributos>
        </HalfSection>
        <div>imagem</div>
      </SectionApresentation>
    </HomeContainer>
  )
}
