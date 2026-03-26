import DetailPage from '../../components/DetailPage'
import CADEmbed from '../../components/CADEmbed'
import ScrollReveal from '../../components/ScrollReveal'
import StatRow from '../../components/StatRow'
import Gallery from '../../components/Gallery'
import img from '../../img'

const gallery = [
  { src: img('/images/skateboard horizontal.jpg'), alt: 'Electric skateboard full view 1' },
  { src: img('/images/skateboard top down horizontal.jpg'), alt: 'Electric skateboard full view 2' },
  { src: img('/images/skateboard wheel and wheel hub pulley.png'), alt: 'Wheel pulley 1' },
  { src: img('/images/skateboard wheel mounted pulley.png'), alt: 'Wheel pulley 2' },
  { src: img('/images/skateboard motorboard pulley.png'), alt: 'Wheel pulley 3' },
  { src: img('/images/skateboard motor mount  iso.png'), alt: 'Motor mount 1' },
  { src: img('/images/skateboard cad underside.png'), alt: 'Motor mount 2' },
  { src: img('/images/skateboard motorboard pulley.png'), alt: 'Motor pulley' },
  { src: img('/images/skateboard underside.jpg'), alt: 'Electronics casing' },
]

export default function ElectricSkateboard() {
  return (
    <DetailPage
      backTo="/personal"
      backLabel="Personal Projects"
      tag="Personal Project · First Semester College"
      title="Electric Skateboard"
      heroImage={img('/images/skateboard horizontal.jpg')}
      software={['SolidWorks CAD', '3D Printing', 'CNC Mill', 'Arduino', 'C++ Programming']}
      roles={['Designer', 'Fabricator', 'Programmer']}
    >
      <ScrollReveal>
        <StatRow stats={[
          { value: '12 mph', label: 'Top Speed' },
          { value: '15 mi', label: 'Per Charge' },
          { value: '~$250', label: 'Build Cost' },
        ]} />
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Introduction</h3>
          <p>
            A personal project completed during the first semester at college. The goal was to build a
            reliable electric skateboard at a fraction of the cost of commercial alternatives.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Result</h3>
          <p>
            An electric skateboard reaching 12 mph with 15 miles per charge, built for approximately $250.
            Off-the-shelf components were used where practical; all mechanical interfaces were custom-designed
            in SolidWorks and fabricated with 3D printing and a CNC mill.
          </p>
          <div className="project-image-grid">
            <img src={img('/images/skateboard horizontal.jpg')} alt="Electric skateboard full view 1" loading="lazy" />
            <img src={img('/images/skateboard underside.jpg')} alt="Electric skateboard underside" loading="lazy" />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Designed Parts</h3>
          <p>
            Off-the-shelf: longboard deck, trucks, wheels. Custom-designed: wheel pulley, motor mount,
            motor pulley, electronics casings.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Wheel Pulley</h3>
          <p>
            Uses a Kegel wheel design — meshes into the wheel's spokes, bolted in place to secure the
            pulley. Ensures positive rotation transfer from the belt drive system to the wheel.
          </p>
          <div className="project-image-grid">
            <img src={img('/images/skateboard wheel and wheel hub pulley.png')} alt="Wheel pulley 1" loading="lazy" />
            <img src={img('/images/skateboard wheel mounted pulley.png')} alt="Wheel pulley 2" loading="lazy" />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Motor Mount</h3>
          <p>
            Two-part design: the motor mount holds the motor at the correct spacing from the truck axle,
            while the clamp wraps around the truck and locks the mount in place. Secure grip and rapid
            iteration made possible by 3D printing.
          </p>
          <div className="project-image-grid">
            <img src={img('/images/skateboard motor mount  iso.png')} alt="Motor mount 1" loading="lazy" />
            <img src={img('/images/skateboard cad underside.png')} alt="Motor mount 2" loading="lazy" />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Motor Pulley</h3>
          <p>
            A 30-tooth HTD pulley meshes around the motor spindle to transfer torque from the motor to
            the wheel pulley via a toothed belt.
          </p>
          <img src={img('/images/skateboard motorboard pulley.png')} alt="Motor pulley" className="project-image-single" loading="lazy" />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Electronics Casings</h3>
          <p>
            Two casings house the battery pack and the H-bridge/ESP32 respectively. All casings are
            coated in epoxy — hiding layer lines from 3D printing, providing waterproofing, and
            significantly increasing structural strength.
          </p>
          <img src={img('/images/skateboard underside.jpg')} alt="Electronics casing" className="project-image-single" loading="lazy" />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Remote Control — ESP-NOW Protocol</h3>
          <p>
            The skateboard uses an ESP32 remote communicating with an onboard ESP32 via the ESP-NOW
            wireless protocol. This enables low-latency, reliable control of speed and braking without
            requiring Wi-Fi infrastructure.
          </p>
          <pre style={{
            background: 'var(--bg-2)',
            border: '1px solid var(--card-border)',
            borderRadius: 'var(--radius-sm)',
            padding: '20px 24px',
            overflowX: 'auto',
            fontSize: '0.8rem',
            lineHeight: 1.6,
            marginTop: 16,
            fontFamily: "'Courier New', Courier, monospace",
            color: '#c5c8c6',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}><code>{`#include <esp_now.h>
#include <WiFi.h>

uint8_t broadcastAddress1[] = {0x08, 0xA6, 0xF7, 0xBC, 0x6B, 0x68};
bool connected = false;
uint8_t input = 33;
uint8_t value = 30;
uint8_t loopnumber = 0;

typedef struct test_struct {
    int arr[5];
} test_struct;

test_struct test;

// Callback when data is sent
void OnDataSent(const uint8_t *mac_addr, esp_now_send_status_t status) {
    char macStr[18];
    snprintf(macStr, sizeof(macStr), "%02x:%02x:%02x:%02x:%02x:%02x",
             mac_addr[0], mac_addr[1], mac_addr[2], mac_addr[3], mac_addr[4], mac_addr[5]);
    connected = (status == ESP_NOW_SEND_SUCCESS);
}

void setup() {
    Serial.begin(9600);
    WiFi.mode(WIFI_STA);
    pinMode(input, INPUT);

    while (esp_now_init() != ESP_OK) {
        Serial.println("Error initializing ESP-NOW");
        return;
    }

    esp_now_peer_info_t peerInfo;
    peerInfo.channel = 0;
    peerInfo.encrypt = false;
    memcpy(peerInfo.peer_addr, broadcastAddress1, 6);

    while (esp_now_add_peer(&peerInfo) != ESP_OK) {
        Serial.println("Failed to add peer");
        return;
    }
}

void loop() {
    if (loopnumber == 50) {
        loopnumber = 0;
        value = value + 5;
    }
    if (value >= 100) {
        value = 100;
    }
    test.arr[1] = value;
    Serial.println(analogRead(input));
    esp_now_register_send_cb(OnDataSent);
    esp_err_t result = esp_now_send(0, (uint8_t *) &test, sizeof(test_struct));
    delay(10);
    loopnumber = loopnumber + 1;
}`}</code></pre>
          <p style={{ marginTop: 24 }}>Receiver code running on the onboard ESP32:</p>
          <pre style={{
            background: 'var(--bg-2)',
            border: '1px solid var(--card-border)',
            borderRadius: 'var(--radius-sm)',
            padding: '20px 24px',
            overflowX: 'auto',
            fontSize: '0.8rem',
            lineHeight: 1.6,
            marginTop: 8,
            fontFamily: "'Courier New', Courier, monospace",
            color: '#c5c8c6',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}><code>{`#include <esp_now.h>
#include <WiFi.h>

typedef struct test_struct {
    int arr[5];
} test_struct;

test_struct myData;

uint8_t boardOutput = 26;
uint8_t direction = 33;
uint8_t brake = 35;
bool connected = false;
unsigned long timer = 0;

void OnDataRecv(const esp_now_recv_info* mac, const uint8_t* incomingData, int len) {
    memcpy(&myData, incomingData, sizeof(myData));
    Serial.println(myData.arr[0]);
    timer = millis();
}

void setup() {
    Serial.begin(9600);
    pinMode(brake, OUTPUT);
    pinMode(direction, OUTPUT);
    digitalWrite(direction, LOW);
    digitalWrite(brake, HIGH);

    WiFi.mode(WIFI_STA);

    if (esp_now_init() != ESP_OK) {
        Serial.println("Error initializing ESP-NOW");
        return;
    }
}

void loop() {
    esp_now_register_recv_cb(OnDataRecv);
    digitalWrite(direction, LOW);
    digitalWrite(brake, HIGH);
    digitalWrite(direction, myData.arr[2]);
    if (timer < millis() - 250) {
        analogWrite(boardOutput, 0);
        digitalWrite(brake, LOW);
    } else {
        digitalWrite(brake, 1 - myData.arr[0]);
        analogWrite(boardOutput, myData.arr[1]);
    }
}`}</code></pre>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>View CAD Files</h3>
          <div style={{ display: 'grid', gap: 24 }}>
            <div>
              <iframe
                src="https://gmail2144250.autodesk360.com/shares/public/SH30dd5QT870c25f12fc8141b1c4d557ac6c?mode=embed"
                width="100%"
                height="500px"
                allowFullScreen
                style={{ border: 'none', borderRadius: 'var(--radius-sm)', display: 'block' }}
                title="Deck Assembly (Without Trucks)"
              />
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 6, textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.04em' }}>Made in SolidWorks · Displayed in Fusion 360</p>
            </div>
            <div>
              <iframe
                src="https://gmail2144250.autodesk360.com/shares/public/SH30dd5QT870c25f12fc16cc1d79c3d0c38c?mode=embed"
                width="100%"
                height="500px"
                allowFullScreen
                style={{ border: 'none', borderRadius: 'var(--radius-sm)', display: 'block' }}
                title="Motor Mount"
              />
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 6, textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.04em' }}>Made in SolidWorks · Displayed in Fusion 360</p>
            </div>
            <div>
              <iframe
                src="https://gmail2144250.autodesk360.com/shares/public/SH30dd5QT870c25f12fc24dbab5fe4001975?mode=embed"
                width="100%"
                height="500px"
                allowFullScreen
                style={{ border: 'none', borderRadius: 'var(--radius-sm)', display: 'block' }}
                title="Truck Clamp"
              />
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 6, textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.04em' }}>Made in SolidWorks · Displayed in Fusion 360</p>
            </div>
            <div>
              <iframe
                src="https://gmail2144250.autodesk360.com/shares/public/SH30dd5QT870c25f12fc1d6bc195f24d58af?mode=embed"
                width="100%"
                height="500px"
                allowFullScreen
                style={{ border: 'none', borderRadius: 'var(--radius-sm)', display: 'block' }}
                title="Motor Pulley"
              />
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 6, textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.04em' }}>Made in SolidWorks · Displayed in Fusion 360</p>
            </div>
            <div>
              <iframe
                src="https://gmail2144250.autodesk360.com/shares/public/SH30dd5QT870c25f12fc29dadb112ad7fd94?mode=embed"
                width="100%"
                height="500px"
                allowFullScreen
                style={{ border: 'none', borderRadius: 'var(--radius-sm)', display: 'block' }}
                title="Wheel Pulley"
              />
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 6, textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.04em' }}>Made in SolidWorks · Displayed in Fusion 360</p>
            </div>
            <div>
              <iframe
                src="https://gmail2144250.autodesk360.com/shares/public/SH30dd5QT870c25f12fcfeb998c57b71ba1e?mode=embed"
                width="100%"
                height="500px"
                allowFullScreen
                style={{ border: 'none', borderRadius: 'var(--radius-sm)', display: 'block' }}
                title="Battery Holder"
              />
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 6, textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.04em' }}>Made in SolidWorks · Displayed in Fusion 360</p>
            </div>
            <div>
              <iframe
                src="https://gmail2144250.autodesk360.com/shares/public/SH30dd5QT870c25f12fce47e1c3ede34f376?mode=embed"
                width="100%"
                height="500px"
                allowFullScreen
                  style={{ border: 'none', borderRadius: 'var(--radius-sm)', display: 'block' }}
                title="ESP-32 and H-Bridge Holder"
              />
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 6, textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.04em' }}>Made in SolidWorks · Displayed in Fusion 360</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <Gallery images={gallery} />
      </ScrollReveal>
    </DetailPage>
  )
}
