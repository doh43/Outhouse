import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg
            className="w-16 h-16 mt-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 125"
            fill="currentColor"
          >
            <path d="M91.356,57.108c-2.803-5.777-5.049-10.167-6.832-13.352c1.517-2.53,2.692-5.232,3.502-8.049   c0.447-1.541,4.203-15.153-1.655-18.625c-1.643-0.99-3.296-0.645-5.825-0.115c-2.74,0.583-5.124,1.582-9.115,3.82   c-1.523,0.856-2.976,1.737-4.419,2.645c-4.916-2.748-10.778-4.148-16.709-4.17c-0.1-0.012-0.198-0.03-0.301-0.03   c-0.166,0-0.327,0.018-0.484,0.049C43.75,19.377,37.975,20.764,33,23.44c-1.447-0.911-2.904-1.794-4.434-2.654   c-3.988-2.236-6.372-3.235-9.141-3.824c-2.501-0.523-4.152-0.87-5.781,0.111c-5.874,3.481-2.118,17.094-1.673,18.628   c0.812,2.822,1.987,5.525,3.504,8.056c-1.783,3.185-4.029,7.575-6.836,13.359c-1.417,2.945-2.399,6.32-3.373,9.666   c-0.614,2.11-0.143,4.377,1.262,6.063c1.413,1.696,3.577,2.581,5.774,2.35c2.407-0.246,5.186-0.425,9.196-0.09l2.131,0.175   c4.767,0.388,6.358,0.518,10.632,1.344c1.89,1.592,4.401,3.484,7.6,4.904c0.994,0.438,1.964,0.82,2.88,1.137   c1.696,0.585,3.477,0.878,5.258,0.878c1.781,0,3.562-0.293,5.256-0.878c0.917-0.316,1.887-0.699,2.888-1.14   c3.192-1.417,5.703-3.31,7.593-4.901c4.273-0.826,5.865-0.956,10.632-1.344l2.134-0.175c4.009-0.336,6.788-0.155,9.193,0.09   c2.203,0.225,4.361-0.654,5.774-2.35c1.405-1.687,1.876-3.953,1.238-6.146C93.759,63.437,92.777,60.062,91.356,57.108z    M34.855,56.329c0-1.619,1.312-2.931,2.931-2.931c1.619,0,2.931,1.312,2.931,2.931s-1.312,2.931-2.931,2.931   C36.168,59.26,34.855,57.948,34.855,56.329z M62.214,59.26c-1.619,0-2.931-1.312-2.931-2.931s1.312-2.931,2.931-2.931   c1.619,0,2.931,1.312,2.931,2.931S63.832,59.26,62.214,59.26z M89.629,69.646c-0.167,0.199-0.642,0.662-1.425,0.575   c-1.274-0.13-2.718-0.248-4.404-0.285c-0.137-0.281-0.273-0.559-0.416-0.853c-1.848-3.811-4.149-8.554-8.41-12.85   c-4.86-4.899-8.591-7.007-11.898-8.555c-0.659-0.308-1.361-0.464-2.084-0.464c-1.925,0-3.694,1.131-4.507,2.881l-3.18,6.859   c-1.091,2.355-0.183,5.171,2.067,6.413c2.17,1.197,3.812,2.406,5.02,3.696c1.59,1.698,2.599,3.426,3.309,4.924   c-0.258,0.102-0.504,0.231-0.716,0.413c-1.784,1.536-3.995,3.278-6.861,4.551c-0.869,0.383-1.708,0.715-2.497,0.986   c-2.372,0.821-4.879,0.819-7.251,0c-0.787-0.271-1.627-0.604-2.489-0.983c-2.873-1.275-5.084-3.018-6.868-4.554   c-0.146-0.126-0.31-0.227-0.479-0.315c0.554-1.484,1.309-3.138,3.073-5.022c1.207-1.29,2.849-2.499,5.018-3.696   c2.251-1.241,3.159-4.058,2.068-6.414l-3.058-6.596c-0.817-1.762-2.501-3.069-4.441-3.14c-0.789-0.029-1.555,0.125-2.271,0.46   c-3.307,1.548-7.038,3.655-11.898,8.555c-4.261,4.296-6.562,9.039-8.41,12.85c-0.143,0.294-0.279,0.572-0.416,0.853   c-1.686,0.037-3.13,0.155-4.404,0.285c-0.783,0.085-1.258-0.376-1.425-0.575c-0.202-0.243-0.51-0.756-0.279-1.548   c0.893-3.068,1.816-6.241,3.05-8.806c3.159-6.51,5.582-11.201,7.409-14.343c0.478-0.822,0.448-1.845-0.077-2.638   c-1.64-2.476-2.884-5.164-3.698-7.998c-1.862-6.411-1.56-11.948-0.671-12.863c0.423,0.013,1.414,0.221,2.31,0.408   c1.879,0.399,3.743,1.066,7.704,3.287c1.885,1.061,3.665,2.137,5.441,3.292c0.058,0.038,0.12,0.06,0.18,0.093   c0.063,0.034,0.124,0.069,0.189,0.097c0.093,0.04,0.187,0.07,0.282,0.099c0.057,0.017,0.113,0.035,0.171,0.048   c0.102,0.023,0.204,0.036,0.308,0.045c0.056,0.005,0.112,0.012,0.168,0.013c0.104,0.003,0.207-0.004,0.31-0.015   c0.057-0.006,0.114-0.01,0.172-0.02c0.105-0.018,0.208-0.046,0.31-0.077c0.052-0.016,0.104-0.029,0.155-0.049   c0.11-0.042,0.215-0.094,0.319-0.151c0.031-0.017,0.063-0.026,0.094-0.044c3.946-2.388,8.58-3.759,13.286-4.138v5.786   c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5v-5.817c0.797,0.057,1.588,0.148,2.373,0.263v2.24c0,1.381,1.119,2.5,2.5,2.5   s2.5-1.119,2.5-2.5v-1.073c2.085,0.683,4.066,1.585,5.862,2.732c0.087,0.055,0.183,0.08,0.273,0.123   c0.05,0.024,0.1,0.048,0.152,0.068c0.299,0.12,0.607,0.201,0.918,0.201c0.501,0,0.987-0.168,1.405-0.453   c1.762-1.144,3.528-2.213,5.394-3.262c3.964-2.223,5.827-2.89,7.721-3.292c0.887-0.186,1.881-0.395,2.301-0.405   c0.881,0.88,1.191,6.432-0.679,12.87c-0.813,2.827-2.056,5.516-3.696,7.991c-0.525,0.793-0.555,1.815-0.077,2.638   c1.827,3.142,4.25,7.833,7.405,14.335c1.238,2.572,2.161,5.745,3.078,8.896C90.139,68.89,89.831,69.402,89.629,69.646z" />
            <path d="M81.123,25.586c-0.06-0.216-0.207-0.399-0.405-0.504c-0.2-0.105-0.43-0.122-0.646-0.053   c-3.813,1.283-7.469,3.379-9.761,5.742c-0.284,0.293-0.31,0.75-0.06,1.073l5.858,7.434c0.156,0.201,0.396,0.318,0.649,0.318   c0.006,0,0.012,0,0.018,0c0.259-0.006,0.501-0.134,0.652-0.346c0.925-1.306,2.221-3.582,2.863-5.666   C81.399,29.978,81.508,26.97,81.123,25.586z" />
            <path d="M19.498,25.029c-0.216-0.07-0.446-0.052-0.646,0.053c-0.199,0.106-0.345,0.288-0.405,0.504   c-0.385,1.383-0.276,4.392,0.834,7.998c0.642,2.083,1.938,4.36,2.863,5.666c0.151,0.212,0.392,0.34,0.652,0.346   c0.006,0,0.012,0,0.018,0c0.253,0,0.492-0.117,0.649-0.318l5.858-7.434c0.25-0.323,0.224-0.78-0.06-1.073   C26.967,28.408,23.311,26.312,19.498,25.029z" />
          </svg>
          <span className="font-rufina text-sky-900 md:font-bold mb-3 mt-3 ml-2 text-4xl">
            Avidoir
          </span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 Avedoir
          <a
            href=""
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          ></a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
