// استخدام الدالة prompt لقراءة درجة الحرارة من المستخدم
let temperature = prompt("ما هي درجة الحرارة الحالية؟");

// تحويل درجة الحرارة إلى رقم
temperature = Number(temperature);

// التحقق من صحة القيمة المدخلة

  if (temperature < 18) {
    console.log("بارد");
  } else if (temperature >= 18 && temperature <= 30) {
    console.log("معتدل");
  } else if (temperature > 30 && temperature < 50) {
    console.log("حار");
  } else {
    console.log("قيمة غير صالحة");
  }

