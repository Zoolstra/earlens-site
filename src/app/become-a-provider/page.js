import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { WistiaVideo } from "@/components/WistiaVideo";
import { C } from "@/constants/colors";
import Script from "next/script";

export const metadata = {
  title: "Become a Provider — Earlens",
  description: "Learn how to bring Earlens to your practice and offer patients the most complete hearing solution on the market.",
};

const stats = [
  { val: "10kHz", label: "Audible bandwidth — closer to normal hearing in the critically important high frequencies" },
  { val: "2.5×", label: "The audible bandwidth of conventional hearing aids" },
  { val: "82%", label: "Found Earlens improved the effort required to carry on conversations" },
];

export default function BecomeAProviderPage() {
  return (
    <>
      <Script src="https://www.google.com/recaptcha/api.js" strategy="lazyOnload" />

      <PageHero
        gradient
        label="Partner With Us"
        title="Become A Provider"
        subtitle="Learn About Earlens Unique Mechanism of Action"
      />

      {/* Key value prop */}
      <section style={{ padding: "100px 0", background: C.white }}>
        <div className="wrap">
          {/* Text + Video row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", marginBottom: 60 }}>
            <FadeIn>
              <div>
                <div style={{ color: C.teal, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Why Earlens</div>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: C.text, lineHeight: 1.2, marginBottom: 24 }}>
                  Most Complete Hearing On The Market
                </h2>
                <p style={{ color: C.textLight, fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
                  Learn About Earlens Unique Mechanism of Action
                </p>
                <p style={{ color: C.textLight, fontSize: 16, lineHeight: 1.8 }}>
                  Earlens direct drive technology leads to clinically superior performance compared to traditional hearing aids.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}>
                <WistiaVideo id="5ffjdd62qp" height={320} />
              </div>
            </FadeIn>
          </div>

          {/* Stats row */}
          <FadeIn delay={0.15}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {stats.map((s, i) => (
                <div key={i} style={{ background: C.light, borderRadius: 16, padding: "24px 28px", display: "flex", gap: 20, alignItems: "center", border: `1px solid ${C.grayLight}` }}>
                  <div style={{ fontSize: 36, fontWeight: 900, color: C.teal, lineHeight: 1, flexShrink: 0, minWidth: 80 }}>{s.val}</div>
                  <div style={{ color: C.textLight, fontSize: 14, lineHeight: 1.6 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Watch a Lens Placement video */}
      <section style={{ padding: "100px 0", background: C.light }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <FadeIn>
              <div>
                <div style={{ color: C.teal, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>See It In Action</div>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: C.text, lineHeight: 1.2, marginBottom: 16 }}>
                  Watch a Lens Placement
                </h2>
                <p style={{ color: C.textLight, fontSize: 16, lineHeight: 1.7 }}>
                  See what it takes to place one of our custom lenses on the tympanic membrane.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}>
                <WistiaVideo id="9v40c1z9z3" height={340} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Speak to a Representative form */}
      <section style={{ padding: "100px 0", background: C.white }}>
        <div className="wrap">
          <FadeIn>
            <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 56px" }}>
              <div style={{ color: C.teal, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Get In Touch</div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: C.text, lineHeight: 1.2, marginBottom: 16 }}>
                Speak to a Representative
              </h2>
              <p style={{ color: C.textLight, fontSize: 16, lineHeight: 1.7 }}>
                Complete the form below and a member of our provider development team will reach out within one business day.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div style={{ maxWidth: 680, margin: "0 auto", background: C.light, borderRadius: 24, padding: "48px 52px", border: `1px solid ${C.grayLight}`, boxShadow: "0 4px 32px rgba(0,0,0,0.06)" }}>
              <form
                method="POST"
                action="https://earlens1.activehosted.com/proc.php"
                noValidate
                style={{ display: "flex", flexDirection: "column", gap: 24 }}
              >
                <input type="hidden" name="u" value="69B35FDAD4C22" />
                <input type="hidden" name="f" value="54" />
                <input type="hidden" name="s" />
                <input type="hidden" name="c" value="0" />
                <input type="hidden" name="m" value="0" />
                <input type="hidden" name="act" value="sub" />
                <input type="hidden" name="v" value="2" />
                <input type="hidden" name="or" value="f8143c56-eaad-4c17-b3ef-73e85085f5d0" />
                <input type="hidden" name="field[71]" value="" />
                <input type="hidden" name="field[72]" value="(direct)" />

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  <FormField label="First Name" required>
                    <input type="text" name="firstname" placeholder="Type your first name" required style={inputStyle} />
                  </FormField>
                  <FormField label="Last Name" required>
                    <input type="text" name="lastname" placeholder="Type your last name" required style={inputStyle} />
                  </FormField>
                </div>

                <FormField label="Email Address" required>
                  <input type="email" name="email" placeholder="Type your email" required style={inputStyle} />
                </FormField>

                <FormField label="Phone Number" required>
                  <input type="tel" name="phone" placeholder="Type your phone number" required style={inputStyle} />
                </FormField>

                <FormField label="Practice Name" required>
                  <input type="text" name="customer_account" placeholder="Type your company name" required style={inputStyle} />
                </FormField>

                <FormField label="Function" required>
                  <select name="field[67]" required style={inputStyle}>
                    <option value=""></option>
                    <option value="ENT Physician">ENT Physician</option>
                    <option value="Audiologist">Audiologist</option>
                    <option value="Administrator">Administrator</option>
                    <option value="Other">Other</option>
                    <option value="Member Physician">Member Physician</option>
                    <option value="Member Admin &amp; Advanced Practice Provider">Member Admin &amp; Advanced Practice Provider</option>
                    <option value="Nonmember Admin &amp; Advanced Practice Provider">Nonmember Admin &amp; Advanced Practice Provider</option>
                    <option value="Nonmember Physician">Nonmember Physician</option>
                    <option value="Member Physician Military">Member Physician Military</option>
                    <option value="Physician">Physician</option>
                    <option value="Chief Medical Officer">Chief Medical Officer</option>
                    <option value="Otorhinolaryngologist">Otorhinolaryngologist</option>
                    <option value="Practice Administrator">Practice Administrator</option>
                    <option value="Vice President, Strategy and Physician Relations">Vice President, Strategy and Physician Relations</option>
                    <option value="Surgeon">Surgeon</option>
                    <option value="President">President</option>
                    <option value="President and Co-Founder">President and Co-Founder</option>
                    <option value="Neurotology, Puget Sound ENT">Neurotology, Puget Sound ENT</option>
                    <option value="Chief Development Officer">Chief Development Officer</option>
                    <option value="Otorhinolaryngologist Head and Neck Surgeon">Otorhinolaryngologist Head and Neck Surgeon</option>
                    <option value="Owner/Physician">Owner/Physician</option>
                    <option value="Neurotologist">Neurotologist</option>
                    <option value="President and Physician">President and Physician</option>
                    <option value="Attending Physician">Attending Physician</option>
                    <option value="Founder">Founder</option>
                    <option value="BBA, COPM">BBA, COPM</option>
                    <option value="Otolaryngology-Head and Neck Surgery">Otolaryngology-Head and Neck Surgery</option>
                    <option value="Managing Partner">Managing Partner</option>
                    <option value="Medical Doctor">Medical Doctor</option>
                    <option value="Head and Neck Surgeon">Head and Neck Surgeon</option>
                    <option value="MD">MD</option>
                    <option value="Otolaryngologist - Head and Neck Surgeon">Otolaryngologist - Head and Neck Surgeon</option>
                    <option value="Founder and CEO">Founder and CEO</option>
                    <option value="Partner">Partner</option>
                    <option value="Physician &amp; Owner">Physician &amp; Owner</option>
                    <option value="Co-Founder/Director">Co-Founder/Director</option>
                    <option value="General Otolaryngologist">General Otolaryngologist</option>
                    <option value="CEO">CEO</option>
                    <option value="Chief Executive Officer">Chief Executive Officer</option>
                    <option value="Executive Director">Executive Director</option>
                    <option value="Chief Operating Officer">Chief Operating Officer</option>
                    <option value="Chief Administrative Officer">Chief Administrative Officer</option>
                    <option value="Practice Management">Practice Management</option>
                  </select>
                </FormField>

                <FormField label="Country" required>
                  <select name="field[68]" required style={inputStyle}>
                    <option value=""></option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Aland Islands">Aland Islands</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia, Plurinational State of">Bolivia, Plurinational State of</option>
                    <option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</option>
                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                    <option value="Botswana">Botswana</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">Central African Republic</option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Chinese Taipei">Chinese Taipei</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Congo, the Democratic Republic of the">Congo, the Democratic Republic of the</option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cote d'lvoire">Cote d&apos;lvoire</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Curacao">Curacao</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">Dominican Republic</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="French Southern Territories">French Southern Territories</option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guernsey">Guernsey</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                    <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Isle of Man">Isle of Man</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jersey">Jersey</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Korea, Democratic People's Republic of">Korea, Democratic People&apos;s Republic of</option>
                    <option value="Korea, Republic of">Korea, Republic of</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Lao People's Democratic Republic">Lao People&apos;s Democratic Republic</option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macao">Macao</option>
                    <option value="Macedonia, the former Yugoslav Republic of">Macedonia, the former Yugoslav Republic of</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Moldova, Republic of">Moldova, Republic of</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="New Caledonia">New Caledonia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="Norfolk Island">Norfolk Island</option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Pitcairn">Pitcairn</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Reunion">Reunion</option>
                    <option value="Romania">Romania</option>
                    <option value="Russian Federation">Russian Federation</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint Barthelemy">Saint Barthelemy</option>
                    <option value="Saint Helena, Ascension and Tristan da Cunha">Saint Helena, Ascension and Tristan da Cunha</option>
                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Saint Martin (French part)">Saint Martin (French part)</option>
                    <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                    <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Sint Maarten (Dutch part)">Sint Maarten (Dutch part)</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                    <option value="South Sudan">South Sudan</option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Timor-Leste">Timor-Leste</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Venezuela, Bolivarian Republic of">Venezuela, Bolivarian Republic of</option>
                    <option value="Viet Nam">Viet Nam</option>
                    <option value="Virgin Islands, British">Virgin Islands, British</option>
                    <option value="Wallis and Futuna">Wallis and Futuna</option>
                    <option value="Western Sahara">Western Sahara</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                </FormField>

                <FormField label="Comments">
                  <textarea
                    name="field[66]"
                    placeholder="Optional: Type your comments here"
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </FormField>

                <div>
                  <p style={{ fontSize: 13, color: C.textLight, marginBottom: 12 }}>Please verify your request. <span style={{ color: "#c0392b" }}>*</span></p>
                  <div className="g-recaptcha" data-sitekey="6LcwIw8TAAAAACP1ysM08EhCgzd6q5JAOUR1a0Go" />
                </div>

                <button
                  type="submit"
                  style={{
                    background: C.teal,
                    color: "#fff",
                    border: "none",
                    borderRadius: 6,
                    padding: "16px 32px",
                    fontSize: 15,
                    fontWeight: 700,
                    letterSpacing: 1,
                    cursor: "pointer",
                    alignSelf: "flex-start",
                  }}
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

function FormField({ label, required, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: 14, fontWeight: 600, color: C.text }}>
        {label}{required && <span style={{ color: "#c0392b", marginLeft: 2 }}>*</span>}
      </label>
      {children}
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 6,
  border: `1px solid ${C.grayLight}`,
  fontSize: 15,
  color: C.text,
  background: "#fff",
  outline: "none",
  boxSizing: "border-box",
};