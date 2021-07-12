import React from 'react';
import './EcomModal.modules.css';

const EcomModal = ({ modalApp }) => {
    const { name, category, image } = modalApp;

    return (
        <div className="modal-app-container">
            <div className="app-header">
                <h1>{name}</h1>
                <h3>Category: {category}</h3>
                <img src={image} alt="" />
            </div>

            {/* Modal app details */}
            <div className="modal-app-wrapper">
                <div className="modal-app-contents">
                    <div className="content-header">
                        <h2>{name}</h2>
                    </div>
                    <div className="content-info">
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni non itaque consequuntur corrupti dolorem ad odit sapiente, sequi veniam error, iste nihil dolores ab debitis velit? Quas, corrupti quod. Consequatur voluptas officia laboriosam ex dolorum vero, a excepturi expedita nobis aperiam laudantium dolorem repudiandae architecto assumenda voluptates eaque saepe veniam. Facilis officia possimus perspiciatis illum nobis eaque quibusdam laborum nostrum ratione. Sequi eum neque provident laudantium modi iste nisi commodi amet accusantium, quam cupiditate maiores animi dolorem quidem officiis repellendus dolorum laborum suscipit eius iure? Sint consectetur quaerat optio et sequi commodi eos voluptatibus, animi, dolorem aperiam blanditiis sapiente architecto magnam. Est libero nesciunt aperiam corporis cum molestias, atque unde, molestiae ad dolor obcaecati possimus, sit deserunt tempora magnam illo accusantium. Ratione, eveniet ipsum. Cumque excepturi laboriosam aspernatur consequuntur sed distinctio ducimus, labore explicabo illum unde repudiandae repellendus dignissimos tempore enim, vel cum animi quidem asperiores molestias velit nisi! Dolore, aut ex consequatur laudantium sed provident ipsa. Asperiores reprehenderit explicabo eligendi optio sit aut necessitatibus tempora ex beatae hic. Cupiditate temporibus similique ratione veniam aperiam beatae mollitia quam sequi? Molestias vero dolor nam eos voluptatibus, maiores incidunt eligendi consectetur? Quam labore, tempore illo aliquam quasi nam deleniti ad beatae necessitatibus quis obcaecati fugit recusandae molestias cupiditate, odio id iste ducimus? Ipsam nobis veritatis modi doloribus a sunt. Libero soluta culpa voluptatibus non voluptatem aspernatur quam fugiat perspiciatis architecto explicabo ipsum distinctio debitis facere ab, perferendis deleniti quo quidem necessitatibus quae quia excepturi recusandae labore! Recusandae nihil in impedit, aut suscipit dolores ad! Deserunt corporis, illo vero excepturi praesentium ratione, quibusdam temporibus qui necessitatibus ipsum nulla aut dolorem ut tempore labore aliquid sequi voluptas magni asperiores, nihil modi consequuntur? Perferendis eligendi perspiciatis facere facilis unde inventore nam tempore excepturi fuga nemo nostrum esse distinctio iusto non at, quas ipsa molestiae. Culpa quos dignissimos dolores illum repudiandae iste sint enim voluptates sit labore cupiditate laboriosam eius, deserunt vero maxime, harum, deleniti consequatur officia sequi obcaecati neque eligendi debitis consequuntur. Aut excepturi quisquam corrupti corporis quia non quaerat voluptatem ipsa animi dolor asperiores distinctio praesentium inventore ipsum repellat laboriosam, aperiam quidem molestias natus. Error omnis ut, aut incidunt id tempore velit veniam quasi, illo similique voluptatibus corrupti. Velit cum modi, voluptas ab minima ipsam aperiam dolorum est voluptate ipsa necessitatibus consectetur maiores fuga debitis fugit quibusdam dolores ea. Adipisci reprehenderit dolorem beatae nemo modi, voluptatem placeat consequuntur minima, illo nobis illum impedit reiciendis nihil eius praesentium? Architecto rerum illum voluptatibus officia cumque ad nostrum aperiam libero deleniti eligendi ipsum sed eum, doloribus voluptate quia nam commodi quidem unde qui. Doloribus iure ea dignissimos illo velit eaque a soluta natus maxime, recusandae ut alias repellendus sunt placeat voluptatibus labore sit fuga eos. Porro officia est ab, veniam iure quo totam fugit enim expedita quidem voluptatem eum, in ipsum similique molestias doloribus architecto maiores et atque magni. Perspiciatis non veniam dolor? Odit veniam sint magni laboriosam laudantium, dolorem maxime perferendis eveniet inventore, corrupti ipsam illum accusantium temporibus? Voluptatibus eligendi repudiandae consequatur cupiditate. Beatae, dolores quia.</h5>
                    </div>
                </div>

                <div className="modal-app-features">
                    <div className="feature-header">
                        <h2>{name} features</h2>
                    </div>
                    <div className="feature-info">
                        <ul>
                            <li>Featutes one</li>
                            <li>Featutes one</li>
                            <li>Featutes one</li>
                            <li>Featutes one</li>
                            <li>Featutes one</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default EcomModal;