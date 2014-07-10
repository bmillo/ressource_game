(function () {
    employeeData = {
        "employees": [
            {
                "id": "ggg",
                "img": "ggg.jpeg",
                "name": "Best Candidate",
                "borderclass": "zoin-box-dashed"
            },
            {
                "id": "fbe",
                "img": "fbe.jpeg",
                "name": "Frank Beeh"
            },
            {
                "id": "csu",
                "img": "csu.jpeg",
                "name": "Christoph Suess"
            }
        ],
        "levels": [{
            "level": "JSE"
        }, {
            "level": "SSE"
        }, {
            "level": "PC"
        }, {
            "level": "LA"
        }, {
            "level": "BUL"
        }, {
            "level": "D"
        }],
        "skills": [{
            "skill_name": "Java"
        }, {
            "skill_name": "XSLT"
        }, {
            "skill_name": "Database"
        }, {
            "skill_name": "JavaScript"
        }, {
            "skill_name": "Selenium"
        }, {
            "skill_name": "Build Tools"
        }, {
            "skill_name": "Scrum"
        }, {
            "skill_name": "Architekur"
        }, {
            "skill_name": "Mobile Development"
        }]
    };
    var template = $('#skillCardTemplate').html();
    var html = Mustache.to_html(template, employeeData);
    $('body').append(html);
})();

function saveHtmlAsImage(id, name) {

    /*    var scaledElement = $("#" + id).css({
        'transform': 'scale(1.1,1.1)',
        '-ms-transform': 'scale(1.1,1.1)',
        '-webkit-transform': 'scale(1.1,1.1)'
    });
    var oldWidth = scaledElement.width();
    var oldHeight = scaledElement.height();
*/

    html2canvas(document.getElementById(id), {
        onrendered: function (canvas) {
            //var t = canvas.getContext('2d');
            //document.body.appendChild(canvas);
            console.log(id);
            canvas.webkitImageSmoothingEnabled = false;
            canvas.mozImageSmoothingEnabled = false;
            canvas.imageSmoothingEnabled = false;
            document.location.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

            /*var link = document.createElement('a');
            link.setAttribute('download', name + ".png");
            link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            link.click();*/
        }
    });
}

function saveAsImage() {
    var timer = 0;
    $.each(employeeData.employees, function (index, value) {
        setTimeout(function () {
            saveHtmlAsImage(value.id, value.id)
        }, timer);
        timer += 5000;
    });
}