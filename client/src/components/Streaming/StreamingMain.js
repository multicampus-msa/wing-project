import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 150px 150px 150px 150px 150px 150px;
  grid-template-rows: 65px 300px 65px 300px 300px;
  margin-top: 1rem;
  margin-left: 1rem;
  font-family: "NanumSquare", sans-serif;
  
`

const StreamingMain = () => {
    return (
        <div style={{ gridRow: "1 / 4", gridColumn: "2 / 8", fontFamily: "NanumBarunGothic" }}>
            <StyledDiv>
                <p style={{ fontSize: "29px", borderBottom: "1px solid", borderColor: "#c2c2c2", gridColumn: "1 / 7"}}>따끈따끈한 최신 추천 음악</p>
                <Carousel interval={4000} style={{ gridColumn: "1 / 7" }}>
                    <Carousel.Item>
                        <img style={{ width: "300px", height: "300px" }}
                             alt="test"
                             src="https://i.pinimg.com/originals/bd/3a/b6/bd3ab633e24122b5982d48c98adf6cc6.png"/>
                        <img style={{ width: "300px", height: "300px" }}
                             alt="test"
                             src="https://w.namu.la/s/5dbccf9196b27709d939151faa5d1f8559afdf636e325795a84085b5c38c5da963d002979103b858d65fa9e16586adeacff2ef1c6e9fd971747a3eecbf2f3c243f21dd87c3bade38d05390f0029f503e13f382ca623dec022586b0da5775346e"/>
                        <img style={{ width: "300px", height: "300px" }}
                             alt="test"
                             src="https://ww.namu.la/s/f9786a380cc3f51665712c42d2ad0374ea3d5a07e702419e06afbafa3e8d36d9622adad4ab9320779e15be440023b16c98b8bf6a452b102efd431a96f232cfc076e5dbcf712fb26a4586eacdd198286c2de38f646b814925b01e18028e0706cd13d2cca0e22607a55b5e5091ade595df"/>
                        <Carousel.Caption>
                            <span style={{ background: "rgba(0, 0, 0, 0.5)", fontSize: "25px", fontWeight: "bold" }}>당신의 귀를 달달하게 해줄 3인의 음악</span>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img style={{ width: "300px", height: "300px" }}
                             alt="test"
                             src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFRUXGRgYGBcYFxgYFxcaGBcaHRcYGhcYHSggGholHRgYITEiJSkrLi4uGiAzODMtNygtLisBCgoKDg0OGxAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAPYAzQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIDBAUGB//EADwQAAEDAQQIBQMCBAUFAAAAAAEAAhEDBCExQRJRYXGBkbHwBQYiocEy0eETQhRSYvEjcoKSsgcVosLi/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAEDAgQF/8QAJREBAQACAgIBBAIDAAAAAAAAAAECESExA0ESBCIyURRCE2Fx/9oADAMBAAIRAxEAPwDyyCgBMornKEkyhIBIBMBAQZEITCAgEmUj3mnKAISCcd/3QQgENyRTAQEGEAo3oAQRJwkjv8IARKCe/hBQZlIoQAmQQpJFAKE4SCI7lM05SBQUyEmS779kBJNIEgbk93VInvcmAEwhASMQgkASTd3kqq9cNF0SclhqVC4yeGxamIa3WoZDiblWbYdizPK1eHeHPru0W3ayi6k3Wpju8K/4s6+iky1HPsbCu+/yY+LnDsLHaPKldskaJu4+6lPN477VvgznpnacEysrHOpu0KjS07REfjatINy2jZrsICcpIIIQi9MGiUAIKAEimUBBlCBsTUSgJOQkU0MiUwkhAACaRRkkBCkFEKu1uOgb+ymbHVfpOmLsFBrCSAL919yGFa7DSIqMOQd9p6rVuo1IX/bKhFzZwEC/HAxqXsPLPhL2NDngtImRr1OGokQOC7lgsrGtDmtvOf8AdbB0XB5M8s5p2+PCY8q0tG9TFanMabSdQcJUm6Kj8NLzLbgeP+EtqtIMTkc2nI7tYXhKdQj0kQRceh919LttuotMOeGnavn/AJgaz9bSpkFrrzGsY/HJdH01svx9Of6mSzc7ZxUQKlyolErt04l4qKTXrNKm1yWg0scpKkOVoKQCAnKRQAEXocgOQDQEpTQyEIlCAYSQCmUgFGs2WlSQ4oDm0YmV6DwqzabmMGMnvkJ4LhUmw7ROuF6fyYdK1gH9rXfYex9lnyK4dvcuoHRDG3XRri65Us8sU3fXVqOccTIA4AC5daGtGk4wBr5dYWTxHy6Kh03PeNTJOjxbgeKlJp03V4eatXgdCk8BhvOcgkFdO02V9OjpZADHqVm8P8m0m1zVDAHFznEiQJcZIiYAXpK9EOBY7BwhSywt2rjqaeT/AICzAGpaHDXeYgYSdmS855mp2csDrPolrXXlpkQRhzhems1kFTTpPuf9Dv62jAEZrP4v5ep07PUDAAS2eV46BLx5yasLyYdx4AKQUGqS9F54hSBUUINcwq0FUSrAs0lySAUJA0BCROxA2acpFCbJykiEBIGE0AJQgzKg4qcKEJB9K8reF0P4ZrnMYZY15cWtxLWucS4if3a7gAsjrGyl4kH026LK1InCPW10PEZXaN29YvIFv/UBsjnAH6qU53y5m3MjO86l7Hx2wE6FWBLHaQIvN4h2WBmVD42OzeOWMsa7MunUpaYXIsb5XZs74VMWaxmiGrjutrG1IOk5xGkQ1riGA4aTgIbfgDeYMYXejtDAVybTUpUp0nNaXZTeeGaWUaxu3iK/igq2g1GNcGhwp6UEB5iZaYvjWFt8yWzRoEux0fhRqWyiyu51MiSb9hzjYuN5ztekwgbBzOfCVyYz79ft0eT7ceXiYhTKZbcohem8yBMFJIoNYwq0KoKbUguamFFgUkiE70237OaXBG+UA4RCEBJk0EpA3oJQDQUBEIACCEBASCDhfIujDYdhXVs/my2Uw1hrudSkaTXBriWzeNNzS6I25LmO2quolZs5bOn16w2vBd2lXBAXkvBKZq2OjUB9QYATr0bj7haqXiLqdz2mNYw5KEy127NbeltJLmENdokiNLEjaJXjvFfBWCXVP1azv5tMgk7h3cvQWDxOm/BwWytWpkZStZSZRvx55eO8PnTfCwyoH/paDBkXEySMYnEYrzHj9s06miMBj8fdey81+LNJ/SpkE5x918/rUoe4HEE9VjwYT57/AEX1PlyynJNCoe2CtbEVaUjaF2uD5MYKcJFPYhtIKxvfJVtVjUiWBTG1RAU3BZBJqKcIIykmUHWmREppQiUjMHv7Jg61FBKKSRclKQTSM1XUVjiM1R+pMxhhKDktfUP+nFSbIGnJzx/5E/K71exiVw/JBaKVMD+RpjaR6jv0pK9VVZI2qVx5roxy4mnDtvgIcJFx1i48wvF+NWKq0kCo+P8AMV9ErWssEEEjZivJW2nUqOktvJw1CVDyyelsL+3H8J8AJGk57QdRN+C4HjVnLKz5jRJiQQRIAnqOa+pVaYp0pe4N/pbibsNI3nhC+feagIpwABNW666TTKt4fFcfuR83kmVmDjMC0MaqLDWLZjDVvWwtu0mkEHLA/ZX/AMmryl/HuU3K5dro6JnLFUz33gulWcHCDcVzi2DBK1uXpn45TtNoVrNirCtakSTU0BCAYQUJOQSR7xSCE0ERQhOEgIQ38JFBd30Qc3szcoOfySa2cbgEMbe0d6vhZ2tj4/2lUZDSTiOvfRVBsAbh0V9Yzz+VG0DPuR0SlUyx/T1Xlq1k0Rokh1NxE8ZEcDHBensnmh7RD2h41g6J5YH2Xj/INsipVoEAiszP+Zklt+UgkcQcl2rVZyCCWmDhBERxXThccuK4fJ8sLcsa7lbzPSP7XboB6Fcm0+PyfS0A7fwVzf0G6yOH5QymwZF2/wDC1/gwY/k+SzS02ipVdLiSeg2DILg+b3AGm2ZIaTzP/wA+69LTaT/SMbl4vx9+lXdsgcgPmUvLqY8NeDdy3WeyNuK0aRbfkcQq7OBG85bvyr7PfLTquXHleXqYTgqrQb/fvJZXCbiLwrafpJbqU3vuJ3BLoWbZa1n0RIvGY1auCrbUWwOh0G8Ou+Qs9Wz4xiMtf5VMcvVRz8XvEBynKxtcrA9b052iUQqmvVrKgzQEkFEpT3qQyZ3IBSlMJHpGo/mnoRHPilT/AHE5C7Urad6xa6fHhontgKDPqOwfELRXgBU0GXAnF3crO+FbOUmD1N3rRVYHNdscQd2IO/HksxucLu4Mq9h9TtoB33X9FmtyMlF7qFRrxkcvcHhIX0asyaWk0yyWkTqeAR7OXg4yORx1jURxXa8K8waFIUqjSWaMAjEaLiBwiNt2a1jl90rn83i41HUJ2BLTAw+3soNqBwDmkEXwRgognDvG5d/yeZ8dNTai8DaZdWfGb3f8j7Qva2iuGNLj+0c15BrdIudGJk53kz8+yh5s3X9Nhu1Y1g+nUOd8TxlIyL9RSp/U7YBfxUmlcr0YjXMw4KLL5Gvvmm8RO1I3EJ+mb2rtD/SHHHA8O/ZaP3g6x8LLbBc8ceePvK0NdcN3tCLOCl5VVrNOGOW0DDqFhbculaKkCRkYnhPUKi30f3jP6hqOtUwy9VLy4e4zNKmCqmqYOtVc7XKSERzWWApMx4H2/KikXQQf6efqSy6U8c520VGw523uVKie+qg86WF9w79lTSx39hS1uOveqtriXAZJU36VScmiBvKsjE6gqrGPROsk/CXo72lV+pWH6gdbR8KiqfVwlWOdc3ZKVjUvaRd8TzSDrmyMo5ucT1RUOG/pKg04TkB7iflBW8tXh9qNN4za43jKDnw/C9LUavHVbrl6+o6/vgreLLhyfU4zcqFqbLS3WCMda8rRMXHK7kvWHu9eXtjNGo4a/VdtR5OR9PdXSNM3u3BAUKRvdvUpUa65Un3qBMwhpSeCEzotYu3jofyUmugScgFG2OOjtmOYKrmYbkLz3zWpOE7eVlSdETmT0KvpXiDgQOiotL8NgM8blZTOG4JXo52wVaeiSDkl33K2eIMwdquPx3tWIK2N3NubPH43TakmUd960IkdXexO0NuGy48R+EgJgblfEyDnd9ljK8r+KcKKTjliMR3kmHAEHj91XScWungfjvYtNpaIkZ3hK9qTpF1SWqVlM0mjVI9yfkLOzDn7qVhfltKVx4amX3TabhLuH2+ykcOSRPr4KTgs1ueyqH59grCy/ZcDwaAVVUGrE9TCtqO9R2kxzKXoe1NX79F65z84iBnfui4dF5INJeBrIHMhenquIOvot4Of6juJ0nLh+O04c12Ru74wuu05/CzeM0tKkdYv5d+y1eUsLq7cKicVZ37/AJVFF3zcrw2Qp12zonNTaVWyrfDuasIjWg9qrb9M7Qq7M0xOvFO3k6EblOgYady3PxTv5qLQbt5Wo4jcszxJAWp5Sp4+1gbIIK5j2lpIOK6DHmblRa6UmZj2Twui8uPym4ESkiVVxLKYUilRN0oCle3Xh+MRttOfVruPwU6PqZGYwVrhLYOfNZrEYJHe9E/FqzWX/UadQ3g5d/KhRHqjarrQ2HT33goUR6zzWvSfV0sru/xBuVjHYjMdyqbaP8QbvlXYEcueHv1U70rLzQDe0DGW/wDJGJO28dUm/VuM8gT8Ia3CbuqDna/w1mlWbz5A/hd6quV5fpzUcYFzepH5XWrie5Txc/m7UUnXq9+BBF0XrLTdkdfd60AiNdyaTy2houLTkSFosxu5qzxenDw7WI4jD26KmzuuWcnX4rtG1NzH91Ok+QDzUa+riNx7hQshyRrhvf3I225p4dUw67fCrtlSZAyTiAJW5OEreaiHQ6VcHTfMg3xqwx4qph+o7uqdnZjsv5Y9UWFLVzCpgjPooE+/cqzkVhWM5UShOJV3DI0MENTaJylSc24pUzAChXbjEouN96zVLnTrWiq4gyo1qcjojHg8uWWsUrP9ZUAr7Cy8uykD5Pe5UvERnOUStw9U7D1H3RTdpN29x8J1b3/6T1RQcA3h85LHpT+1FJwkn+l3uI+U3nDsJTJ4dT+E6jdeB9kqePt1/K7J/V/yiOZ/C6JcJWPyu4BhnEuI4aIPwVsPfBZw/KxHysdoZBm/+ysoGQFZUZPBZGXHvsqiKrxun6J1EH4+VyKBvhdrxQS0iMQuDRuhF6X8VaLT9IOrHcVlY71LdTbJIOBWCqwtJByMfM8ksf0pnvtK1Xxdj8Y/CiZJ0RepuvYdYv74J0xdAuEST9lveoxrdOnTBwwBknWdW5Spu0X7DjGo3FSpuyGHfuo2kDKbtizvlqyaTe0DSacjG8ZJsJgH7/CVSuDoui8ANO2MDyKgPvdhCWjlQKlR+ocT7KKdPEquXTlw7jQDfwSaLrkOCbXXKTqhvvUGuMbkr5CnUbeUj/2yVf5teO9aLG6WAaiVneVOiYBAulUs3iljdZLHYjcUw0ROPcoOW77pzGSwrFbPqOzv5U6o1pWfWk73lK9nOmvwtrjpxkRH+2fhbxXc0370/L9OGk63/DgtNqpSG3D6eN0Ke/vQznCTK2lvxVdpp5hZdEt7yW1lSbjuM7sFVFkrN0qcDG+PdcOpTiDFxvHMtPuPcLv1WQexKxWylNM62O0v9L4a4f7tA8028LyxU35JW6nIDhlc7dr71pMyVlCsMDeDdes9Xbr7mqx0zkq6eJGcqdRmi4jkdYUalx0tarHPVxqgIFpkQG3KllMnG7YtVNoWbqNzdUsOIvvHSY+Umu2q5tEHWfwm2zAYo+UL4VXCdLEJFTs4vW8ukMPyWTeVOPuoKTXXqVdUH6ihUrzkiu2CqXMGs96inJCyys4RqETqU6bblS/HHsK5uC3YnjeVgdhr7+6VS4ET2dqhRbnwVle8jaR7wse1PSbfTlrVdQQr4w3LK90Cd3uVmct3iPVWCnosaNx4nSUntkN71J2W0h2Wbf8A2+4TtFQBrTOvv2UJ+aNv2qzTVZockv4kYhVutq6UEnsum9ZzEw76SC07nCCfeeAUzbhn9tiyVqs4IDm0rrjdlxGKHiIj+6ttVMSHDBwJ/wBTYDhyg8VVUuHcodUu4dobpt/qb7jMLMb27u5Wik+CqrQzRMj6XexzHetPG64LLnlKi66Sp/rDDoszRkMMloDeCdkLG1oD4GxUhzjhd7KUA4nDJSLx/MApqs7sO+81fZcDy79kkK2fTk8f5QqlTUol2aELM6Vva9rtIQqMJCELMay62pOMKx2A5+8JIW6nF8QIHcqtz4I72BCFOK1foYzf0We1YD/MEISx7a8n4vS0G+n/AG9VTaKsACJgn3JQhR/uj/Vmxv63qdKhKELoRSFmCqqMjvYhCYUWkSw62u0va/2WRtIu4CftkhCx06fHNzSkiO9quaA4QcOm3ehC1emse2WnjtBg7VcWk3gwEIWqnB+iBiSpNAyHP8IQsb2pJp//2Q=="/>
                        <img style={{ width: "300px", height: "300px" }}
                             alt="test"
                             src="https://soundcat.com/wp/wp-content/uploads/2019/10/fender_x_jannabi_900x900.jpg"/>
                        <img style={{ width: "300px", height: "300px" }}
                             alt="test"
                             src="https://img.hankyung.com/photo/201401/BA.8245481.1.jpg"/>
                        <Carousel.Caption>
                            <span style={{ background: "rgba(0, 0, 0, 0.5)", fontSize: "25px", fontWeight: "bold" }}>요즘 힙합, 인디씬에서 핫한 아티스트들의 신보</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </StyledDiv>
        </div>
    )
}

export default StreamingMain