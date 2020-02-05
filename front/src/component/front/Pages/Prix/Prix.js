import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import './Prix.css'
export default function Prix() {
    return (
        <>
            <Header />
            <div className="prix-container">

                <table className="tableTarif" >
                    <thead className="tableauHead">
                        <tr >
                            <td colspan="4"><h1 className="titretable"> Tarif des  représentations</h1> </td></tr>
                        <tr>
                            <th className="" id="" > Période  </th>
                            <th > Enfant de - de 12 ans</th>
                            <th>  - de 25 ans</th>
                            <th>  Adultes </th>
                        </tr>
                    </thead>

                    <tbody>
                        <td className="" >
                            <tr> Week-End et jours fériés  </tr>
                            <tr> Semaine</tr>
                        </td>

                        <td>
                            <tr> 8 euros</tr>
                            <tr> 6 euros</tr>
                        </td>
                        <td>
                            <tr> 10 euros</tr>
                            <tr> 8 euros</tr>
                        </td>
                        <td>
                            <tr> 15 euros</tr>
                            <tr> 12 euros</tr>
                        </td>

                    </tbody>



                </table>

                <table className="tableTarif" >
                    <thead className="tableauHead">
                        <tr >
                            <td colspan="4"><h1 className="titretable"> Goodies</h1> </td></tr>
                        <tr>
                            <th className="" id="" > Articles  </th>
                            <th > Prix</th>


                        </tr>
                    </thead>

                    <tbody>
                        <td className="" >
                            <tr> Chapeau de clown  </tr>
                            <tr> Nez de Clown</tr>
                            <tr> Peluche de Lion</tr>
                            <tr> Ballon de cirque</tr>
                        </td>

                        <td>
                            <tr> 5 euros</tr>
                            <tr> 3 euros</tr>
                            <tr> 10 euros</tr>
                            <tr> 5 euros</tr>
                        </td>

                    </tbody>

                </table>

                <table className="tableTarif" >
                    <thead className="tableauHead">
                        <tr >
                            <td colspan="4"><h1 className="titretable"> Visite des backstages</h1> </td></tr>
                        <tr>
                            <th className="" id="" > Type  </th>
                            <th > Prix</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td className="" >
                            <tr> Visite des loges</tr>
                            <tr> Entrainement des Lions</tr>
                            <tr> Visite des Loges</tr>
                        </td>

                        <td>
                            <tr> 15 euros</tr>
                            <tr> 20 euros</tr>
                            <tr> 10 euros</tr>
                        </td>

                    </tbody>

                </table>

                
            </div>


            <Footer className="footer" />
        </>
    )
}

