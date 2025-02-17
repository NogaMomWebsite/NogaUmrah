console.log("JavaScript is loaded")

let currentDate = new Date()

const startDate = new Date("2025-02-18")
const endDate = new Date("2025-03-10")
const totalDays = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)

const dailyMessages = [
  "يا أمي يا غالية، ربنا يتقبل عمرتك ويجعلها خير وبركة عليكي وعلينا",
  "بحبك يا أحلى أم في الدنيا، يارب تكوني مبسوطة في رحلتك",
  "كل خطوة بتخطيها في الحرم ربنا يكتبلك بيها حسنات",
  "يارب تكوني حاسة بالراحة والسكينة وانتي في بيت الله",
  "مشتاقين ليكي يا ست الكل، بس فرحانين إنك في أطهر بقعة",
  "ربنا يقبل دعواتك ويستجيب ليكي يا أغلى الناس",
  "كل ما بفتكرك بدعيلك ربنا يحفظك ويرجعك لينا بالسلامة",
  "يارب تكوني بتحسي بالفرحة والإيمان في كل لحظة من عمرتك",
  "مفيش أجمل من إنك تكوني في بيت ربنا، ربنا يتقبل منك",
  "عارفة إنك بتدعيلنا هناك، وإحنا كمان مش بننساكي من دعوتنا",
  "يا رب ترجعي لينا وكلك نور وبركة من زيارتك للحرم",
  "كل يوم بيعدي وإحنا بنعد الأيام لحد ما ترجعي بالسلامة",
  "ربنا يجعل رحلتك دي سبب في سعادتك في الدنيا والآخرة",
  "يا أمي يا حبيبتي، ربنا يكتبلك الأجر والثواب على كل خطوة",
  "مهما الكلام يقول مش هيوفي حقك، ربنا يخليكي لينا يا أغلى وأطيب أم",
  "يارب تكوني بتحسي براحة البال وإنتي في رحاب بيت الله",
  "كل يوم بيعدي بنحمد ربنا إنه اختارك تزوري بيته الحرام",
  "يا ست الكل، يارب عمرتك تكون مقبولة ومبرورة",
  "بنتمنى نشوفك قريب ونسمع منك كل اللي شفتيه في رحلتك الجميلة",
  "آخر يوم في العمرة، ربنا يجعله خير عليكي ويرجعك لينا بالسلامة",
]

const dailyDuas = [
  "يارب احفظ أمي وارعاها في رحلتها وارزقها من فضلك الواسع",
  "اللهم اجعل عمرة أمي مقبولة ومبرورة واغفر لها ولوالديها",
  "يا رب اشفي أمي من كل داء وارزقها الصحة والعافية",
  "اللهم ارزق أمي لذة مناجاتك وحلاوة عبادتك في بيتك الحرام",
  "يارب نور قلب أمي بنور الإيمان واجعل رحلتها سبب في زيادة إيمانها",
  "اللهم اجعل دعاء أمي مستجاب وحقق لها كل ما تتمناه",
  "يا رب اجعل رحلة أمي للعمرة كفارة لكل ذنوبها وارفع درجاتها",
  "اللهم ارزق أمي الفردوس الأعلى من الجنة",
  "يارب اجعل أمي من الذين يظلهم الله في ظله يوم لا ظل إلا ظله",
  "اللهم اجعل عمرة أمي نورًا لها في قبرها ويوم القيامة",
  "يا رب اجعل أمي من الذين يدخلون الجنة بغير حساب",
  "اللهم ارزق أمي حسن الخاتمة واجعل خير أيامها آخرها",
  "يارب اجعل أمي ممن تحبهم وترضى عنهم",
  "اللهم اجعل أمي من الذين يردون على نبيك الحوض",
  "يا رب ارزق أمي الثبات على دينك حتى تلقاك",
  "اللهم اجعل أمي من الذين يسمعون كلامك ويتبعون أحسنه",
  "يارب اجعل أمي من الذين يقال لهم ادخلوا الجنة بما كنتم تعملون",
  "اللهم اجعل عمرة أمي سببًا في مغفرة ذنوبها وقبول توبتها",
  "يا رب ارزق أمي رؤية وجهك الكريم في الجنة",
  "اللهم اجعل آخر دعاء أمي في عمرتها مستجاب واختم لها بالخيرات",
]

const birthdayMessages = [
  "كل سنة وانتي طيبة يا أحلى أم في الدنيا! عيد ميلاد سعيد وانتي في بيت ربنا",
  "يا بخت السنة دي بيكي يا أمي، عيد ميلاد سعيد وعمرة مباركة",
  "عيد ميلادك السنة دي مميز يا ست الكل، ربنا يديم عليكي الصحة والسعادة",
  "أجمل هدية ليكي في عيد ميلادك إنك في الحرم، كل سنة وانتي بخير يا أمي",
  "عيد ميلاد سعيد يا أغلى الناس! دعواتنا ليكي من هنا وانتي في أطهر بقعة",
]

function updateWebsite() {
  currentDate = new Date()
  updateState(currentDate)
}

function updateState(date) {
  const progressBar = document.querySelector(".progress-bar")
  const progressText = document.getElementById("progressText")
  const messageText = document.getElementById("messageText")
  const duaText = document.getElementById("duaText")
  const birthdayMessagesElement = document.getElementById("birthdayMessages")

  if (isDateBetween(date, startDate, endDate)) {
    const elapsedDays = Math.floor((date.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    const progress = (elapsedDays / totalDays) * 100

    progressBar.style.width = `${progress}%`
    progressText.textContent = `باقي ${Math.ceil(totalDays - elapsedDays)} أيام على نهاية الرحلة`

    messageText.textContent = dailyMessages[elapsedDays % dailyMessages.length]
    duaText.textContent = dailyDuas[elapsedDays % dailyDuas.length]

    document.getElementById("dailyMessage").style.display = "block"
    document.getElementById("dailyDua").style.display = "block"
  } else if (date < startDate) {
    progressBar.style.width = "0%"
    progressText.textContent = "الرحلة لم تبدأ بعد"
    document.getElementById("dailyMessage").style.display = "none"
    document.getElementById("dailyDua").style.display = "none"
  } else {
    progressBar.style.width = "100%"
    progressText.textContent = "انتهت الرحلة"
    document.getElementById("dailyMessage").style.display = "none"
    document.getElementById("dailyDua").style.display = "none"
  }

  if (isBirthday(date)) {
    birthdayMessagesElement.style.display = "block"
    const birthdayMessagesList = document.getElementById("birthdayMessagesList")
    birthdayMessagesList.innerHTML = birthdayMessages.map((msg) => `<p>${msg}</p>`).join("")
  } else {
    birthdayMessagesElement.style.display = "none"
  }

  updatePrayerTimes(date)
}

function isDateBetween(date, start, end) {
  return date >= start && date <= end
}

function isBirthday(date) {
  return date.getMonth() === 1 && date.getDate() === 26 // 26 فبراير (لاحظ أن الشهور تبدأ من 0)
}

async function updatePrayerTimes(date) {
  const prayerTimesList = document.getElementById("prayerTimesList")
  prayerTimesList.innerHTML = "<li>جاري تحميل مواقيت الصلاة...</li>"

  try {
    const formattedDate = date.toISOString().split("T")[0]
    const response = await fetch(
      `https://api.aladhan.com/v1/timingsByCity/${formattedDate}?city=Mecca&country=Saudi%20Arabia&method=4`,
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    if (data.code === 200 && data.status === "OK" && data.data && data.data.timings) {
      const timings = data.data.timings
      prayerTimesList.innerHTML = `
                <li>الفجر: ${timings.Fajr}</li>
                <li>الظهر: ${timings.Dhuhr}</li>
                <li>العصر: ${timings.Asr}</li>
                <li>المغرب: ${timings.Maghrib}</li>
                <li>العشاء: ${timings.Isha}</li>
            `
    } else {
      throw new Error("Invalid data received from API")
    }
  } catch (error) {
    console.error("Error fetching prayer times:", error)
    prayerTimesList.innerHTML = "<li>عذرًا، حدث خطأ أثناء تحميل مواقيت الصلاة. يرجى المحاولة مرة أخرى لاحقًا.</li>"
  }
}

// تحديث الموقع كل دقيقة
setInterval(updateWebsite, 60000)

// التحديث الأولي عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", updateWebsite)

