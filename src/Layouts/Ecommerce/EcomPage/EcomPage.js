import React from 'react';
import './EcomPage.modules.css';
import { Container } from '@material-ui/core';
import OnePageApp from './Compons/OnePageApp';
import MultiplePageApp from './Compons/MultiplePageApp';
import EcommerceWebApp from './Compons/EcommerceWebApp';

const EcomPage = ({ applications }) => {

    // Handle featutes button:
    const handleFeatureBtn = (addedApp) => {
        // console.log(addedApp);
        const myModal = document.getElementById('myModal');
        myModal.style.display = 'block';
    }

    // Handle modal close button:
    function handleModalClose() {
        const modal = document.getElementById('myModal');
        modal.style.display = "none";
    }

    return (
        <Container>
            <div id="myModal" className="modal">
                <strong onClick={handleModalClose} className="close">X</strong>
                <div className="modal-body">
                    <h1>This is my modal body</h1>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dignissimos dicta voluptatem consectetur autem facere sit natus, vero facilis ab cumque ex temporibus accusamus quasi architecto, doloremque unde est! Illum praesentium quibusdam ut ipsam laboriosam porro consectetur! Voluptatibus fugit pariatur nulla recusandae ea doloremque omnis culpa perferendis dolore odit cumque eos ipsum tenetur, sed repellendus animi reprehenderit autem quae harum nihil natus voluptates. Molestiae praesentium consectetur commodi temporibus recusandae aperiam modi accusantium alias. Odit dolore nostrum porro temporibus, cumque ducimus? Doloribus facilis magnam placeat magni, tenetur iure ex, minus aspernatur, accusamus iste quis! Repudiandae, veritatis labore. Eos, sapiente exercitationem accusantium iste neque, corporis veritatis unde nihil officia praesentium qui modi omnis, quibusdam aperiam assumenda facere dicta quae! Nostrum, adipisci. Sed, repudiandae? Enim porro nemo nihil iusto natus! Voluptates assumenda accusamus unde nesciunt iusto impedit quibusdam odit, magnam omnis numquam provident ullam veritatis harum vero non. Similique nulla placeat incidunt saepe atque voluptatibus vel ad iusto esse deserunt, adipisci dicta voluptatem, cupiditate amet praesentium animi perspiciatis! Provident doloremque nostrum dolorem sint sed adipisci fugiat quo ipsa quam placeat enim quae eaque architecto voluptatem impedit iste saepe id, amet deserunt veniam ipsam dolore mollitia! Accusamus est, tempora aspernatur vitae nesciunt, sed quos voluptas molestiae quas explicabo culpa odio nisi quia cupiditate dignissimos ipsam debitis ad sapiente. Repudiandae, dolores inventore. Omnis facere odio doloremque inventore fuga quo natus temporibus in assumenda distinctio ad, esse, enim maiores, atque asperiores tempora id rem velit adipisci accusamus soluta. Repudiandae vel numquam tempore illum beatae facilis praesentium nobis ut ex! Exercitationem, cupiditate. Excepturi facilis fugiat nulla adipisci omnis quo autem distinctio veritatis! Necessitatibus laborum, commodi illo reiciendis culpa pariatur sequi? Quo vel autem consequuntur nam possimus ipsa ipsam iure eaque eligendi earum illo, laborum, deleniti recusandae aspernatur rerum unde quasi officia maxime ab velit quae ullam repellat ratione! Molestias recusandae quod maxime nihil quis amet incidunt autem natus aspernatur ratione, itaque accusantium porro facere debitis, laudantium voluptatibus ipsam unde quam, rem modi quibusdam exercitationem ducimus. Itaque reiciendis ipsum tempore. Dicta eaque alias necessitatibus porro veritatis blanditiis eligendi beatae excepturi. Fuga reprehenderit quas est quo perferendis odio beatae qui cupiditate excepturi deserunt neque voluptatum iusto possimus aspernatur non error dignissimos ullam laboriosam, dolor, magni, exercitationem quod autem asperiores enim. Officia labore tenetur earum! Quibusdam, odit eveniet! Qui iusto praesentium alias! Accusamus exercitationem, quia amet sunt vero tempora modi facilis excepturi temporibus id sed et deleniti voluptatem vel possimus sit quos sapiente autem eveniet cum dolores nesciunt dicta necessitatibus odio. Aliquid iusto molestias accusantium, dicta eaque incidunt dignissimos obcaecati voluptate minima sit dolor ipsam asperiores excepturi, veritatis quibusdam nisi ratione temporibus ea tempora esse amet nobis magni. Optio vitae dolores perspiciatis, beatae delectus quas voluptatum nostrum magnam adipisci deleniti doloremque temporibus commodi illum itaque cum, sit alias amet, excepturi autem culpa. Repudiandae blanditiis sit aliquam assumenda eaque et deserunt accusamus repellat sunt. Minus eaque laborum aliquid ad omnis veniam suscipit ullam distinctio magni eligendi adipisci, ipsam esse praesentium quae ab alias quasi similique provident vero pariatur iure repellat nobis.</h3>
                </div>
            </div>
            <div className="ecom-page-wrapper">
                <OnePageApp
                    applications={applications}
                    handleFeatureBtn={handleFeatureBtn}
                />
                <MultiplePageApp applications={applications} />
                <EcommerceWebApp applications={applications} />
            </div>
        </Container>
    );
};

export default EcomPage;