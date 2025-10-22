// Los datos del JSON están incrustados aquí.
const data = {
    "describe_matrix": { "count": { "favorite_count": 1198.0, "id": 1199.0, "retweet_count": 1198.0, "user.followers_count": 1198.0, "user.friends_count": 1198.0 }, "mean": { "favorite_count": 12.202003338898164, "id": 1.1909482828284088e+18, "retweet_count": 33.925709515859765, "user.followers_count": 5046.368948247078, "user.friends_count": 1021.626878130217 }, "std": { "favorite_count": 104.53245995361105, "id": 3.4425044120617452e+16, "retweet_count": 815.0630495614117, "user.followers_count": 72793.23507864912, "user.friends_count": 6446.56499792927 }, "min": { "favorite_count": 0.0, "id": 167.0, "retweet_count": 0.0, "user.followers_count": 1.0, "user.friends_count": 0.0 }, "25%": { "favorite_count": 0.0, "id": 1.1918218393786122e+18, "retweet_count": 0.0, "user.followers_count": 186.5, "user.friends_count": 262.0 }, "50%": { "favorite_count": 0.0, "id": 1.191929775016874e+18, "retweet_count": 0.0, "user.followers_count": 483.0, "user.friends_count": 532.5 }, "75%": { "favorite_count": 2.0, "id": 1.192133212113404e+18, "retweet_count": 1.0, "user.followers_count": 1377.25, "user.friends_count": 992.75 }, "max": { "favorite_count": 2733.0, "id": 1.192608404327547e+18, "retweet_count": 28090.0, "user.followers_count": 1997889.0, "user.friends_count": 221536.0 } },
    "engagement_matrix": { "text": { "33": "@Cesar_Antonio_F @LivePalestina @Jou_Kaiser @tere_marinovic @elvillegaschile @sergioulloa1 @German69738375… https://t.co/0mgrQNJVrU", "3276": "@dearc26 @eluniversocom Q insoportable estas personas resentidas. Viven amargados! Hay gustos y gustos. El bolón de Tere es rico!", "3738": "Se acabó el chisme con el #closetdedav y ahora leo twists del #cafedetere... qué tiro guayaquileños todo bien en casa?", "2198": "@KaritoSoBsc Oe oe oe bien recuerdo que una vez twitteaste qué más barato Te salía comprar un departamento en salin… https://t.co/FL0MGZv9Hx", "1951": "La señora del café d Tere es la prueba de q trabajando duro se puede llegar a rico. Ella ha demostrado q no es nece… https://t.co/JMNbFy5KLS", "3608": "Cuando trabajaba en el parque Colón una vez quise ir al #cafedetere que hay ahí vi los precios y me parecieron dema… https://t.co/LP8o8NIHU6", "3992": "@ornella_soriano @_SantinoBoy @CafedeTere Que comentario tan regionalista... cabeza hueca que piensa que en la sier… https://t.co/cWBukqR7EM", "3457": "@tere_marinovic En esta crisis, no hay buenos ni malos, se enfrentan entre chilenos, padres y familias. Y todo este… https://t.co/CQsnaeEs8Z", "2148": "Si el cafe de tere te parece que es caro, turro y puro mkt anda busca otro bolon chtm\nEl ecuatoriano próspero tiene… https://t.co/APCz649NbZ", "932": "Soy cliente regular del Café de Tere. Ahora bien, que sigá sin aceptar tarjetas de crédito es indefendible. Doña Te… https://t.co/jHdbRXcdfa" }, "favorite_count": { "33": 10.0, "3276": 79.0, "3738": 10.0, "2198": 46.0, "1951": 332.0, "3608": 1.0, "3992": 1.0, "3457": 7.0, "2148": 187.0, "932": 130.0 }, "retweet_count": { "33": 1.0, "3276": 1.0, "3738": 3.0, "2198": 3.0, "1951": 81.0, "3608": 0.0, "3992": 0.0, "3457": 3.0, "2148": 63.0, "932": 35.0 } },
    "heatmap": { "Monday": { "14.0": 1.0, "15.0": 1.0, "16.0": 3.0, "17.0": 177.0, "22.0": 2734.0, "23.0": 82.0 }, "Tuesday": { "0.0": 1.0, "1.0": 32.0, "2.0": 20.0, "4.0": 3.0, "7.0": 1.0, "11.0": 1.0, "12.0": 3.0, "13.0": 73.0, "14.0": 195.0, "15.0": 18.0, "16.0": 175.0, "17.0": 102.0, "18.0": 1012.0, "19.0": 651.0, "20.0": 210.0, "21.0": 412.0, "22.0": 1555.0, "23.0": 1331.0 }, "Wednesday": { "0.0": 209.0, "1.0": 906.0, "2.0": 1789.0, "3.0": 895.0, "4.0": 265.0, "5.0": 37.0, "6.0": 27.0, "7.0": 31.0, "8.0": 37.0, "9.0": 4.0, "10.0": 12.0, "11.0": 64.0, "12.0": 46.0, "13.0": 115.0, "14.0": 98.0, "15.0": 76.0, "16.0": 36.0, "17.0": 160.0, "18.0": 24.0, "19.0": 34.0, "20.0": 22.0, "21.0": 282.0, "22.0": 65.0, "23.0": 83.0 }, "Thursday": { "0.0": 37.0, "1.0": 104.0, "2.0": 40.0, "3.0": 10.0, "4.0": 15.0, "5.0": 8.0, "12.0": 17.0, "13.0": 5.0, "14.0": 1.0, "15.0": 3.0, "16.0": 57.0, "17.0": 29.0, "18.0": 10.0, "19.0": 1.0, "20.0": 16.0, "21.0": 1.0, "22.0": 1.0, "23.0": 100.0 }, "Friday": { "0.0": 5.0, "14.0": 8.0 }, "Saturday": { "0.0": 5.0, "10.0": 11.0, "15.0": 5.0, "16.0": 2.0, "17.0": 8.0 }, "Sunday": { "13.0": 7.0, "18.0": 1.0 } },
    "topics": { "topics": [{ "title": "Precio y percepción de valor", "detail": "Fuerte polarización: para muchos es “caro/sobrevalorado” (bolón $3,5–$5, jugos hasta $8, extras como huevo $1, mínimos de delivery altos); otros justifican que se paga limpieza, local, marca y servicio.", "challenge": "Definir estrategia de precios y porciones (combos, tamaños, “bolón popular” en franjas), hacer transparente la propuesta de valor y costos, y ofrecer beneficios (lealtad, horas felices) para mejorar la ecuación valor/precio." }, { "title": "Calidad y consistencia del producto", "detail": "Opiniones dispares: “normalito”, “perdió sazón/industrializado”, tigrillo “sopudo/insípido”, bolón frío o muy salado, uso de lácteos excesivos o margarina vs otros que lo consideran excelente. Variabilidad entre locales.", "challenge": "Refinar y estandarizar recetas y procesos (temperatura, salado, grasas), auditorías sensoriales por local, KPIs de calidad en tiempo real y pilotos de receta “clásico criollo” vs “sello Tere” para reconciliar expectativas." }, { "title": "Medios de pago", "detail": "Reclamo recurrente por no aceptar tarjetas/datafast; fricción de usar solo efectivo; algunos declaran no volver por esta razón.", "challenge": "Habilitar POS, QR y billeteras; comunicar razones y fechas de implementación; incentivar pagos digitales con pequeños descuentos y reducir fuga de ventas." }], "conclusion": "La marca es icónica y altamente conversada, pero opera en un terreno polarizado donde el precio/valor, la consistencia del sabor, los medios de pago y la experiencia operativa generan fricción. Prioridades tácticas: 1) habilitar pagos con tarjeta/QR, 2) recalibrar y estandarizar recetas (en especial tigrillo/bolón) con control de temperatura y salado, 3) ajustar la propuesta de valor (porciones, combos y políticas de delivery/ají), 4) fortalecer el discurso de inclusión y emprendimiento con respuestas empáticas y 5) capitalizar la viralidad con activaciones y ofertas por canal. Ejecutar estas mejoras debería elevar satisfacción, reducir la conversación negativa y sostener el crecimiento sin sacrificar autenticidad." }
};


document.addEventListener('DOMContentLoaded', function() {
    // Rellenar KPIs
    document.getElementById('total-mentions').innerText = data.describe_matrix.count.id.toLocaleString();
    document.getElementById('avg-favorites').innerText = data.describe_matrix.mean.favorite_count.toFixed(1);
    document.getElementById('avg-retweets').innerText = data.describe_matrix.mean.retweet_count.toFixed(1);
    document.getElementById('max-followers').innerText = (data.describe_matrix.max['user.followers_count'] / 1000000).toFixed(1) + 'M';

    // Rellenar Tweets de Interacción
    const engagementContainer = document.getElementById('engagement-matrix');
    for (const id in data.engagement_matrix.text) {
        const tweetDiv = document.createElement('div');
        tweetDiv.className = 'tweet';
        tweetDiv.innerHTML = `
            <p>"${data.engagement_matrix.text[id]}"</p>
            <div class="tweet-stats">
                <span>❤️ ${data.engagement_matrix.favorite_count[id]}</span> | 
                <span>🔁 ${data.engagement_matrix.retweet_count[id]}</span>
            </div>
        `;
        engagementContainer.appendChild(tweetDiv);
    }

    // Rellenar Temas
    const topicsContainer = document.getElementById('topics-list');
    data.topics.topics.forEach(topic => {
        const topicCard = document.createElement('div');
        topicCard.className = 'topic-card';
        topicCard.innerHTML = `
            <h3>${topic.title}</h3>
            <p><strong>Detalle:</strong> ${topic.detail}</p>
            <p><strong>Desafío:</strong> ${topic.challenge}</p>
        `;
        topicsContainer.appendChild(topicCard);
    });

    // Rellenar Conclusión
    document.getElementById('conclusion-text').innerText = data.topics.conclusion;

    // Renderizar Gráfico de Mapa de Calor
    const ctx = document.getElementById('heatmapChart').getContext('2d');
    const heatmapHours = Array.from({ length: 24 }, (_, i) => `${i}:00`);

    const chartData = {
        labels: heatmapHours,
        datasets: Object.keys(data.heatmap).map((day, dayIndex) => {
            const dayData = data.heatmap[day];
            return {
                label: day,
                data: heatmapHours.map((hourLabel, hourIndex) => {
                    const hourKey = `${hourIndex}.0`;
                    return dayData[hourKey] !== undefined && dayData[hourKey] > -1 ? dayData[hourKey] : 0;
                }),
                backgroundColor: `hsla(${dayIndex * (360 / 7)}, 70%, 50%, 0.7)`,
                borderColor: `hsla(${dayIndex * (360 / 7)}, 70%, 50%, 1)`,
                borderWidth: 1
            };
        })
    };

    new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Volumen de Menciones por Día y Hora'
                }
            },
            scales: {
                x: {
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Hora del Día'
                    }
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Número de Menciones'
                    }
                }
            },
        },
    });
});
